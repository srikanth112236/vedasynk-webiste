"use client";

import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/components/forms/lead-modal";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

export function OpenLeadButton({
  children = "Submit a project brief",
  title,
  description,
  ...props
}: ButtonProps & {
  title?: string;
  description?: string;
}) {
  const { openLeadModal } = useLeadModal();
  return (
    <Button
      type="button"
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        openLeadModal({ title, description });
      }}
    >
      {children}
    </Button>
  );
}
