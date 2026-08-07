import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Black mark for light backgrounds; white mark for dark backgrounds. */
export const LOGO_SRC = {
  black: "/logo-black.png",
  white: "/logo-white.png",
} as const;

export type LogoVariant = keyof typeof LOGO_SRC;

type Props = {
  className?: string;
  /** `black` on light bg, `white` on dark bg */
  variant?: LogoVariant;
  priority?: boolean;
  /** Image height in CSS (width scales). Default 36px */
  height?: number;
};

export function Logo({
  className,
  variant = "black",
  priority = false,
  height = 80,
}: Props) {
  // Source assets are square canvases with a wide wordmark — display as wide lockup
  const width = Math.round(height * 4.8);

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src={LOGO_SRC[variant]}
        alt={SITE.name}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain object-left"
        style={{ height, width: "auto", maxWidth: width }}
      />
    </Link>
  );
}
