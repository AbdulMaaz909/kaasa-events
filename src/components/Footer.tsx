import Link from "next/link";
import BrandBar from "@/components/BrandBar";
import { contact } from "@/lib/site";

const wordmark = "font-display font-black text-white font-stretch-[78%]";

/** `full` is the home-page footer; `compact` is the one-line footer on inner pages. */
export default function Footer({ variant = "compact" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") {
    return (
      <footer className="bg-night text-ash">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-9 text-sm">
          <span className={`${wordmark} text-2xl`}>KAASA EVENTS</span>
          <span>© 2026 Kaasa Events · Santacruz East, Mumbai 400029</span>
          <a href={`mailto:${contact.email}`} className="text-white hover:text-accent-soft">
            {contact.email}
          </a>
        </div>
        <BrandBar flip />
      </footer>
    );
  }

  return (
    <footer className="bg-night text-snow">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-12 px-6 pb-10 pt-16">
        <div className="flex flex-[1_1_280px] flex-col gap-3.5">
          <div className={`${wordmark} text-[40px]`}>KAASA EVENTS</div>
          <p className="max-w-[320px] leading-relaxed text-ash">
            Exhibition stall design, fabrication and installation from Mumbai.
          </p>
        </div>
        <div className="flex flex-[1_1_200px] flex-col gap-2.5">
          <div className="font-mono text-xs tracking-[0.14em] text-accent-soft">PAGES</div>
          {[
            ["/portfolio", "Portfolio"],
            ["/services", "Services"],
            ["/about", "About"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="text-snow no-underline hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-[1_1_300px] flex-col gap-2.5 leading-relaxed">
          <div className="font-mono text-xs tracking-[0.14em] text-accent-soft">OFFICE</div>
          <div className="text-ash">{contact.addressLines.join(" ")}</div>
          <a href={`mailto:${contact.email}`} className="text-white hover:text-accent-soft">
            {contact.email}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-night-line px-6 pb-7 pt-5 text-[13px] text-ash">
        © 2026 Kaasa Events. All rights reserved.
      </div>
      <BrandBar flip />
    </footer>
  );
}
