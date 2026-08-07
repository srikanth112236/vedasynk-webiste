import { NextResponse } from "next/server";
import { z } from "zod";
import {
  digitsOnly,
  normalizeEmail,
  resolveCountryIso,
  toApiDialCode,
  validateEmail,
  validateNationalNumber,
} from "@/lib/phone";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().min(3),
  company: z.string().optional().default(""),
  /** National digits, e.g. "9876543210" */
  phone: z.string().trim().min(7).max(20),
  /** Dial code as "+91" (or ISO "IN" — normalized before upstream) */
  countryCode: z.string().optional().default("+91"),
  serviceInterest: z.string().min(1),
  message: z.string().trim().min(10).max(4000),
  page: z.string().optional().default("/contact"),
  source: z.string().optional().default("vedasynk_website"),
  companyWebsite: z.string().optional().default(""),
});

const LEAD_API_URL =
  process.env.LEAD_API_URL?.trim() ||
  "https://api.steyzi.com/api/public/website/vedasynk-lead";

const LEAD_ORIGIN =
  process.env.LEAD_ORIGIN?.trim() ||
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://vedasynk.com";

type UpstreamBody = {
  success?: boolean;
  message?: string;
  error?: string;
  data?: {
    id?: string;
    type?: string;
    status?: string;
    phone?: string;
    duplicate?: boolean;
  };
};

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          message: "Invalid form data",
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const emailErr = validateEmail(parsed.data.email);
    if (emailErr) {
      return NextResponse.json(
        { success: false, error: emailErr, message: emailErr },
        { status: 400 },
      );
    }

    const phone = digitsOnly(parsed.data.phone);
    const countryIso = resolveCountryIso(parsed.data.countryCode);
    const dialCode = toApiDialCode(parsed.data.countryCode || countryIso);

    const phoneErr = validateNationalNumber(countryIso, phone);
    if (phoneErr) {
      return NextResponse.json(
        { success: false, error: phoneErr, message: phoneErr },
        { status: 400 },
      );
    }

    if (parsed.data.companyWebsite?.trim()) {
      return NextResponse.json({
        success: true,
        message:
          "Thank you! Your message has been sent. Our team will get back to you soon.",
      });
    }

    // Exact contract expected by :5000 lead API
    const payload = {
      name: parsed.data.name.trim(),
      email: normalizeEmail(parsed.data.email),
      company: parsed.data.company?.trim() ?? "",
      countryCode: dialCode,
      phone,
      serviceInterest: parsed.data.serviceInterest,
      message: parsed.data.message.trim(),
      page: parsed.data.page || "/contact",
      source: parsed.data.source || "vedasynk_website",
      companyWebsite: "",
    };

    let upstream: Response;
    try {
      upstream = await fetch(LEAD_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: LEAD_ORIGIN,
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
    } catch (err) {
      console.error("[contact] cannot reach lead API at", LEAD_API_URL, err);
      return NextResponse.json(
        {
          success: false,
          error: `Cannot reach lead API at ${LEAD_API_URL}. Is the server running on port 5000?`,
          message:
            "Lead server on port 5000 is unreachable. Start it and try again.",
          leadApiUrl: LEAD_API_URL,
        },
        { status: 503 },
      );
    }

    const rawText = await upstream.text().catch(() => "");
    let upstreamJson: UpstreamBody | null = null;
    try {
      upstreamJson = rawText ? (JSON.parse(rawText) as UpstreamBody) : null;
    } catch {
      upstreamJson = null;
    }

    if (!upstream.ok) {
      console.error(
        "[contact] upstream failed",
        LEAD_API_URL,
        upstream.status,
        rawText,
      );
      const msg =
        upstreamJson?.message ||
        upstreamJson?.error ||
        (upstream.status === 404
          ? "Lead API route not found on :5000"
          : `Lead API on :5000 returned ${upstream.status}`);
      return NextResponse.json(
        {
          success: false,
          error: msg,
          message: msg,
          leadApiUrl: LEAD_API_URL,
          upstreamStatus: upstream.status,
        },
        { status: 502 },
      );
    }

    if (upstreamJson && upstreamJson.success === false) {
      const msg =
        upstreamJson.message ||
        "Something went wrong while sending your message. Please try again.";
      return NextResponse.json(
        { success: false, error: msg, message: msg, data: upstreamJson.data },
        { status: 422 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        upstreamJson?.message ||
        "Thank you! Your message has been sent. Our team will get back to you soon.",
      data: upstreamJson?.data,
    });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process request",
        message:
          "Something went wrong while sending your message. Please try again.",
      },
      { status: 500 },
    );
  }
}
