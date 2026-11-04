import Link from "next/link";
import type { ReactNode } from "react";

/** Small mono label with an orange dot, used above section headings. */
export function Eyebrow({
  children,
  dot = true,
  className = "",
}: {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 font-mono text-[13px] tracking-[0.14em] text-brand ${className}`}>
      {dot && <span aria-hidden="true" className="h-3.5 w-3.5 shrink-0 rounded-full bg-accent" />}
      {children}
    </div>
  );
}

const buttonVariants = {
  brand: "bg-brand text-white hover:bg-brand-hover hover:text-white",
  accent: "bg-accent text-ink hover:bg-accent-soft hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "brand",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[52px] items-center rounded-full px-7 py-4 font-bold no-underline transition-colors ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Numbered orange circle (01, 02, ...). */
export function StepBadge({ n, size = "md" }: { n: number; size?: "md" | "lg" }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-accent font-mono font-medium text-ink ${
        size === "lg" ? "h-[52px] w-[52px]" : "h-11 w-11"
      }`}
    >
      {String(n).padStart(2, "0")}
    </div>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`rounded-full px-3.5 py-2 font-mono text-xs tracking-[0.08em] ${className}`}>
      {children}
    </span>
  );
}

/** Decorative cluster of purple and orange circles. */
export function CircleCluster({ className = "", full = false }: { className?: string; full?: boolean }) {
  const dot = "absolute rounded-full";
  return (
    <div aria-hidden="true" className={`h-[210px] w-[300px] ${className}`}>
      <div className={`${dot} left-[140px] top-0 h-[150px] w-[150px] bg-brand`} />
      <div className={`${dot} left-[170px] top-[22px] h-[26px] w-[26px] border-2 border-white/75`} />
      {full && <div className={`${dot} left-[204px] top-[46px] h-3 w-3 border-2 border-white/75`} />}
      <div className={`${dot} left-10 top-2.5 h-24 w-24 bg-brand`} />
      <div className={`${dot} left-[106px] top-28 h-11 w-11 bg-brand`} />
      <div className={`${dot} left-0 top-[92px] h-[38px] w-[38px] bg-accent`} />
      <div className={`${dot} left-[120px] top-3 h-4 w-4 bg-accent`} />
      <div className={`${dot} left-40 top-40 h-3.5 w-3.5 bg-accent`} />
      {full && <div className={`${dot} left-[134px] top-44 h-[18px] w-[18px] bg-accent`} />}
      <div className={`${dot} -top-2.5 left-[288px] h-[22px] w-[22px] bg-accent`} />
    </div>
  );
}

/** Hero used by Portfolio, Services and Contact: stripes, circles, eyebrow, title, intro. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-stripes absolute inset-x-0 top-10 h-[260px]" />
      <CircleCluster className="absolute right-[6%] top-[30px] hidden lg:block" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-[22px] px-6 pb-14 pt-[72px]">
        <Eyebrow className="self-start py-1.5 pr-2.5">{eyebrow}</Eyebrow>
        <h1 className="m-0 max-w-[900px] self-start pr-4 font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-none tracking-[-0.02em] text-ink">
          {title}
        </h1>
        <p className="m-0 max-w-[660px] text-[19px] leading-relaxed text-muted">{intro}</p>
        {children}
      </div>
    </section>
  );
}

/** Purple call-to-action band above the footer. */
export function CtaBand({ title, href, label }: { title: string; href: string; label: string }) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div aria-hidden="true" className="absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full bg-brand-deep" />
      <div aria-hidden="true" className="absolute bottom-6 right-[180px] h-9 w-9 rounded-full bg-accent" />
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-[72px]">
        <h2 className="m-0 max-w-[720px] font-display text-[clamp(30px,3.4vw,44px)] font-extrabold tracking-[-0.01em]">
          {title}
        </h2>
        <ButtonLink href={href} variant="accent">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}

/** Pill-shaped toggle buttons; exactly one option is active. */
export function ToggleChips<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.id)}
            className={`min-h-11 cursor-pointer rounded-full border px-5 py-2.5 text-[15px] font-semibold transition-colors ${
              on
                ? "border-brand bg-brand text-white"
                : "border-line-strong bg-white text-body hover:border-brand hover:text-brand"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
