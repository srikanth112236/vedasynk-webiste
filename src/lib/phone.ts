import {
  getExampleNumber,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";
import countriesData from "@/data/countries-phone.json";

export type PhoneCountry = {
  code: string;
  dial: string;
  label: string;
  flag: string;
};

export const PHONE_COUNTRIES = countriesData as PhoneCountry[];

export type PhoneCountryCode = string;

export function getPhoneCountry(code: string): PhoneCountry {
  return (
    PHONE_COUNTRIES.find((c) => c.code === code) ??
    PHONE_COUNTRIES.find((c) => c.code === "IN") ??
    PHONE_COUNTRIES[0]
  );
}

export function isKnownCountryCode(code: string): code is CountryCode {
  return PHONE_COUNTRIES.some((c) => c.code === code);
}

/** Digits only */
export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function getNationalMaxLength(countryCode: string) {
  if (!isKnownCountryCode(countryCode)) return 15;
  try {
    const example = getExampleNumber(countryCode, examples);
    if (example) return Math.max(example.nationalNumber.length + 2, 10);
  } catch {
    /* fall through */
  }
  return 15;
}

export function getPhonePlaceholder(countryCode: string) {
  if (!isKnownCountryCode(countryCode)) return "Phone number";
  try {
    const example = getExampleNumber(countryCode, examples);
    if (example) return example.nationalNumber;
  } catch {
    /* fall through */
  }
  return countryCode === "IN" ? "9876543210" : "Phone number";
}

/**
 * Validate national number for a country using libphonenumber-js.
 * Returns an error message or null if valid.
 */
export function validateNationalNumber(
  countryCode: string,
  national: string,
): string | null {
  const country = getPhoneCountry(countryCode);
  const n = digitsOnly(national);
  if (!n) return "Enter a phone number";

  if (!isKnownCountryCode(countryCode)) {
    return "Select a valid country";
  }

  const parsed = parsePhoneNumberFromString(n, countryCode);
  if (!parsed?.isValid() && !isValidPhoneNumber(n, countryCode)) {
    return `Enter a valid ${country.label} phone number`;
  }

  return null;
}

/** National digits for API payload (matches curl contract). */
export function toLeadPhone(national: string) {
  return digitsOnly(national);
}

/** API countryCode field, e.g. "+91" from ISO "IN" */
export function toApiDialCode(isoOrDial: string): string {
  if (isoOrDial.trim().startsWith("+")) {
    return `+${digitsOnly(isoOrDial)}`;
  }
  if (isKnownCountryCode(isoOrDial)) {
    return `+${getPhoneCountry(isoOrDial).dial}`;
  }
  const dial = digitsOnly(isoOrDial);
  if (dial) return `+${dial}`;
  return "+91";
}

/** Resolve ISO (IN) from "+91", "91", or "IN" for libphonenumber */
export function resolveCountryIso(value: string | undefined): string {
  if (!value?.trim()) return "IN";
  const raw = value.trim();
  if (isKnownCountryCode(raw)) return raw;
  const dial = digitsOnly(raw);
  if (!dial) return "IN";
  // Prefer India when dial is 91
  if (dial === "91") return "IN";
  const match = PHONE_COUNTRIES.find((c) => c.dial === dial);
  return match?.code ?? "IN";
}

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function validateEmail(email: string) {
  const e = email.trim().toLowerCase();
  if (!e) return "Enter your email";
  if (e.length > 254) return "Email is too long";
  if (!EMAIL_RE.test(e)) return "Enter a valid email address";
  const [local, domain] = e.split("@");
  if (!local || !domain) return "Enter a valid email address";
  if (local.length > 64) return "Enter a valid email address";
  if (!domain.includes(".")) return "Enter a valid email address";
  return null;
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}
