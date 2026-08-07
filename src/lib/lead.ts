import { z } from "zod";
import {
  normalizeEmail,
  toApiDialCode,
  toLeadPhone,
  validateEmail,
  validateNationalNumber,
} from "@/lib/phone";

export const leadFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your full name")
      .max(80, "Name is too long"),
    email: z.string().trim().min(1, "Enter your email"),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    /** ISO country for UI + libphonenumber (e.g. "IN") */
    countryCode: z.string().min(1, "Select a country"),
    phoneNational: z.string().min(1, "Enter a phone number"),
    serviceInterest: z.string().min(1, "Select a service"),
    message: z
      .string()
      .trim()
      .min(10, "Tell us a bit more about your project (min 10 characters)")
      .max(4000, "Message is too long"),
    companyWebsite: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const emailErr = validateEmail(data.email);
    if (emailErr) {
      ctx.addIssue({
        code: "custom",
        path: ["email"],
        message: emailErr,
      });
    }

    const phoneErr = validateNationalNumber(
      data.countryCode,
      data.phoneNational,
    );
    if (phoneErr) {
      ctx.addIssue({
        code: "custom",
        path: ["phoneNational"],
        message: phoneErr,
      });
    }
  });

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export { toLeadPhone };

/**
 * Payload matching lead API curl:
 * countryCode: "+91", phone: "9876543210"
 */
export function buildLeadPayload(
  values: LeadFormValues,
  page: string,
): {
  name: string;
  email: string;
  company: string;
  phone: string;
  countryCode: string;
  serviceInterest: string;
  message: string;
  page: string;
  source: "vedasynk_website";
  companyWebsite: string;
} {
  return {
    name: values.name.trim(),
    email: normalizeEmail(values.email),
    company: (values.company ?? "").trim(),
    phone: toLeadPhone(values.phoneNational),
    countryCode: toApiDialCode(values.countryCode),
    serviceInterest: values.serviceInterest,
    message: values.message.trim(),
    page,
    source: "vedasynk_website",
    companyWebsite: "",
  };
}

export const LEAD_SOURCE = "vedasynk_website" as const;
