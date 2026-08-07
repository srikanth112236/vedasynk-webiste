"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/form-fields";
import { ServiceSearchSelect } from "@/components/forms/service-search-select";
import { PhoneCountryInput } from "@/components/forms/phone-country-input";
import {
  buildLeadPayload,
  leadFormSchema,
  type LeadFormValues,
} from "@/lib/lead";

type Props = {
  page?: string;
  submitLabel?: string;
  onSuccess?: () => void;
  compact?: boolean;
  stickySubmit?: boolean;
};

export function LeadForm({
  page,
  submitLabel = "Send message",
  onSuccess,
  compact = false,
  stickySubmit = false,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      countryCode: "IN",
      phoneNational: "",
      serviceInterest: "",
      message: "",
      companyWebsite: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: LeadFormValues) {
    setServerError(null);
    const payload = buildLeadPayload(values, page || pathname || "/contact");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
        message?: string;
        data?: { duplicate?: boolean };
      } | null;

      if (!res.ok || data?.success === false) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Something went wrong while sending your message. Please try again.",
        );
      }

      reset({
        name: "",
        email: "",
        company: "",
        countryCode: "IN",
        phoneNational: "",
        serviceInterest: "",
        message: "",
        companyWebsite: "",
      });
      if (onSuccess) onSuccess();
      else {
        const params = new URLSearchParams();
        if (data?.message) params.set("m", data.message);
        if (data?.data?.duplicate) params.set("dup", "1");
        const qs = params.toString();
        router.push(qs ? `/thank-you?${qs}` : "/thank-you");
      }
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Unable to send right now.",
      );
    }
  }

  const fields = (
    <>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("companyWebsite")}
      />

      <div
        className={`grid gap-4 ${compact ? "sm:grid-cols-1" : "gap-5 sm:grid-cols-2"}`}
      >
        <div className="space-y-2">
          <Label htmlFor="lead-name">Name *</Label>
          <Input id="lead-name" autoComplete="name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-email">Email *</Label>
          <Input
            id="lead-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@company.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-company">Company</Label>
        <Input
          id="lead-company"
          autoComplete="organization"
          {...register("company")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-phone">Phone *</Label>
        <Controller
          name="countryCode"
          control={control}
          render={({ field: countryField }) => (
            <Controller
              name="phoneNational"
              control={control}
              render={({ field: phoneField }) => (
                <PhoneCountryInput
                  id="lead-phone"
                  countryCode={countryField.value}
                  national={phoneField.value}
                  onCountryChange={countryField.onChange}
                  onNationalChange={phoneField.onChange}
                  error={errors.phoneNational?.message || errors.countryCode?.message}
                />
              )}
            />
          )}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-service">Service interest *</Label>
        <Controller
          name="serviceInterest"
          control={control}
          render={({ field }) => (
            <ServiceSearchSelect
              id="lead-service"
              value={field.value}
              onChange={field.onChange}
              error={errors.serviceInterest?.message}
            />
          )}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-message">Message *</Label>
        <Textarea
          id="lead-message"
          rows={compact ? 3 : 5}
          placeholder="Goals, timeline, and anything we should know…"
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-red-600">{errors.message.message}</p>
        ) : null}
      </div>

      {serverError ? (
        <p className="text-sm text-red-600" role="alert">
          {serverError}
        </p>
      ) : null}
    </>
  );

  if (stickySubmit) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full min-h-0 flex-col"
        noValidate
      >
        <div
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-5 py-5 [-webkit-overflow-scrolling:touch] [scrollbar-gutter:stable] md:px-6"
        >
          {fields}
        </div>
        <div className="shrink-0 border-t border-border bg-bg px-5 py-3 md:px-6">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Sending…" : submitLabel}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-5">{fields}</div>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
