/**
 * Generates src/data/countries-phone.json from libphonenumber-js metadata.
 * Run: node scripts/generate-countries-phone.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../src/data/countries-phone.json");

const display = new Intl.DisplayNames(["en"], { type: "region" });

function flagEmoji(code) {
  return [...code.toUpperCase()]
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}

const countries = getCountries()
  .map((code) => {
    try {
      return {
        code,
        dial: getCountryCallingCode(code),
        label: display.of(code) || code,
        flag: flagEmoji(code),
      };
    } catch {
      return null;
    }
  })
  .filter(Boolean)
  .sort((a, b) => a.label.localeCompare(b.label));

const inIdx = countries.findIndex((c) => c.code === "IN");
if (inIdx > 0) {
  const [india] = countries.splice(inIdx, 1);
  countries.unshift(india);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(countries, null, 2)}\n`);
console.log(`Wrote ${countries.length} countries → ${outPath}`);
