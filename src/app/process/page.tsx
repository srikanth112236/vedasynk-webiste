import { ProcessPageContent } from "@/components/sections/process-page";
import { PROCESS_PAGE } from "@/content/process-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: PROCESS_PAGE.metaTitle,
  description: PROCESS_PAGE.metaDescription,
  path: "/process",
});

export default function ProcessPage() {
  return <ProcessPageContent />;
}
