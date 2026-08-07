import Image from "next/image";

type ImgProps = {
  src?: string | Blob;
  alt?: string;
};

export const blogMdxComponents = {
  img: (props: ImgProps) => {
    const src = typeof props.src === "string" ? props.src : "";
    const alt = typeof props.alt === "string" ? props.alt : "";
    if (!src) return null;

    return (
      <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-soft">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={788}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
        {alt ? (
          <figcaption className="border-t border-border px-4 py-3 text-xs text-ink-muted">
            {alt}
          </figcaption>
        ) : null}
      </figure>
    );
  },
};
