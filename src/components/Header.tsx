"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandBar from "@/components/BrandBar";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    pathname === href
      ? "border-b-[3px] border-accent py-2.5 text-brand"
      : "py-2.5 text-body hover:text-brand";

  return (
    <>
      <BrandBar />
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-[18px]">
          <Link
            href="/"
            className="font-display text-[30px] font-black tracking-[0.01em] text-brand no-underline font-stretch-[78%] sm:text-[34px]"
          >
            KAASA EVENTS
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-semibold md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`no-underline ${linkClass(l.href)}`}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-brand px-[22px] py-[13px] font-bold text-white no-underline hover:bg-brand-hover hover:text-white"
            >
              Get a free 3D design
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-body md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Main" className="flex flex-col gap-1 border-t border-line px-6 pb-6 pt-3 text-base font-semibold md:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`self-start no-underline ${linkClass(l.href)}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center self-start rounded-full bg-brand px-[22px] py-[13px] font-bold text-white no-underline hover:text-white"
            >
              Get a free 3D design
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
