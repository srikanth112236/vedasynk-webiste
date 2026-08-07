import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="gradient-hero flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-secondary">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </section>
  );
}
