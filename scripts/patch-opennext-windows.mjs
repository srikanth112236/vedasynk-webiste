/**
 * OpenNext on Windows often fails with EPERM on symlinkSync.
 * Patch @opennextjs/aws to copy the real file when symlink is blocked.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const target = join(
  process.cwd(),
  "node_modules/@opennextjs/aws/dist/build/copyTracedFiles.js",
);

if (!existsSync(target)) process.exit(0);

let src = readFileSync(target, "utf8");
if (src.includes("Windows often blocks symlinks")) process.exit(0);

const needle = `        if (symlink) {
            try {
                symlinkSync(symlink, to);
            }
            catch (e) {
                if (e.code !== "EEXIST") {
                    throw e;
                }
            }
        }`;

const replacement = `        if (symlink) {
            try {
                symlinkSync(symlink, to);
            }
            catch (e) {
                if (e.code === "EPERM" || e.code === "EACCES") {
                    // Windows often blocks symlinks without Developer Mode —
                    // fall back to copying the real target.
                    try {
                        const real = path.resolve(path.dirname(from), symlink);
                        copyFileAndMakeOwnerWritable(real, to);
                    }
                    catch (copyErr) {
                        logger.debug("Error copying symlink target:", copyErr);
                        erroredFiles.push(to);
                    }
                }
                else if (e.code !== "EEXIST") {
                    throw e;
                }
            }
        }`;

if (!src.includes(needle)) {
  console.warn("[patch-opennext-windows] pattern not found — skip");
  process.exit(0);
}

writeFileSync(target, src.replace(needle, replacement));
console.log("[patch-opennext-windows] applied");
