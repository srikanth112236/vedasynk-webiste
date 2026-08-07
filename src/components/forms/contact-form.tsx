"use client";

import { LeadForm } from "@/components/forms/lead-form";

/** Contact page form — same fields + searchable services, posts to lead API. */
export function ContactForm() {
  return (
    <LeadForm page="/contact" submitLabel="Send message" />
  );
}
