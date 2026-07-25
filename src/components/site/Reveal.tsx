import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from "react";

type RevealProps = {
  as?: ElementType;
  variant?: "up" | "fade" | "left" | "right" | "zoom";
  delay?: number;
  className?: string;
  children: ReactNode;
  once?: boolean;
};

export function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
  children,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const dataVariant = variant === "up" ? undefined : variant;
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref as never} data-reveal={dataVariant ?? "up"} style={style} className={className}>
      {children}
    </Tag>
  );
}
