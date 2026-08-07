"use client";

import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useLeadModal } from "@/components/forms/lead-modal";

export function StickyCta() {
  const { openLeadModal } = useLeadModal();

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md md:hidden">
        <div className="flex gap-2">
          <a
            href="/contact#book"
            className="flex h-11 flex-1 items-center justify-center rounded-lg bg-accent text-sm font-medium text-white"
          >
            Book a call
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border border-border text-sm font-medium text-ink"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <Link
          href="/contact#book"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-bg px-4 text-sm font-medium text-ink shadow-lg transition hover:border-accent/40 hover:text-accent"
          aria-label="Book a discovery call"
        >
          <Send className="h-4 w-4" />
          Book a call
        </Link>
        <button
          type="button"
          onClick={() =>
            openLeadModal({
              title: "Quick project brief",
              description: "Send a short request without leaving this page.",
            })
          }
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-bg px-4 text-sm font-medium text-ink shadow-lg transition hover:border-accent/40 hover:text-accent"
          aria-label="Open project brief form"
        >
          Quick brief
        </button>
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Vedasynk — I'd like to discuss a project.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-medium text-white shadow-lg transition hover:brightness-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
