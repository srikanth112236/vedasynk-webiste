export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data.map(stripContext) }
    : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

function stripContext(item: Record<string, unknown>) {
  const { ["@context"]: _ctx, ...rest } = item;
  return rest;
}
