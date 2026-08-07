"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { LeadForm } from "@/components/forms/lead-form";
import { getLenis } from "@/components/motion/lenis-provider";

type LeadModalContextValue = {
  openLeadModal: (opts?: { title?: string; description?: string }) => void;
  closeLeadModal: () => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) {
    throw new Error("useLeadModal must be used within LeadModalProvider");
  }
  return ctx;
}

/** Safe hook when provider may be absent (won't throw). */
export function useLeadModalOptional() {
  return useContext(LeadModalContext);
}

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Tell us what you want to build");
  const [description, setDescription] = useState(
    "Share a short brief—we’ll respond with clarifying questions and a recommended next step.",
  );

  const openLeadModal = useCallback(
    (opts?: { title?: string; description?: string }) => {
      if (opts?.title) setTitle(opts.title);
      else setTitle("Tell us what you want to build");
      if (opts?.description) setDescription(opts.description);
      else
        setDescription(
          "Share a short brief—we’ll respond with clarifying questions and a recommended next step.",
        );
      setOpen(true);
    },
    [],
  );

  const closeLeadModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Pause Lenis while modal is open so the form scrolls natively
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
    return () => {
      getLenis()?.start();
    };
  }, [open]);

  // Lock body scroll as a backup
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const value = useMemo(
    () => ({ openLeadModal, closeLeadModal }),
    [openLeadModal, closeLeadModal],
  );

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/45 backdrop-blur-[2px]" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-[70] flex h-[min(92vh,44rem)] max-h-[92vh] w-[min(100%-1.5rem,34rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-[0_40px_100px_-40px_rgba(10,10,11,0.55)] focus:outline-none"
            aria-describedby="lead-modal-desc"
            onOpenAutoFocus={(e) => {
              // keep focus but don't jump scroll oddly
              e.preventDefault();
              const root = e.currentTarget as HTMLElement;
              root.querySelector<HTMLInputElement>("input:not([aria-hidden])")?.focus();
            }}
          >
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
              <div className="min-w-0 pr-2">
                <Dialog.Title className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                  {title}
                </Dialog.Title>
                <Dialog.Description
                  id="lead-modal-desc"
                  className="mt-1 text-sm leading-relaxed text-ink-secondary"
                >
                  {description}
                </Dialog.Description>
              </div>
              <Dialog.Close
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-bg-soft hover:text-ink"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Dialog.Close>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <LeadForm
                page={pathname || "/"}
                submitLabel="Submit request"
                compact
                stickySubmit
                onSuccess={() => {
                  setOpen(false);
                  router.push("/thank-you");
                }}
              />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </LeadModalContext.Provider>
  );
}

/** Button that opens the lead modal */
export function LeadModalTrigger({
  children,
  className,
  title,
  description,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  asChild?: boolean;
}) {
  const { openLeadModal } = useLeadModal();

  return (
    <button
      type="button"
      className={className}
      onClick={() => openLeadModal({ title, description })}
    >
      {children}
    </button>
  );
}
