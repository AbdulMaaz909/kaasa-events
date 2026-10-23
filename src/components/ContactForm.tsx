"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site";

const briefFields = [
  ["name", "Name"],
  ["company", "Company"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["exhibition", "Exhibition"],
  ["size", "Stall size"],
  ["stallType", "Stall type"],
  ["message", "Brief"],
] as const;

function buildWhatsAppUrl(form: HTMLFormElement) {
  const data = new FormData(form);
  const lines = briefFields
    .map(([key, label]) => [label, String(data.get(key) ?? "").trim()] as const)
    .filter(([, value]) => value)
    .map(([label, value]) => `*${label}:* ${value}`);
  const text = ["*New 3D design request*", "", ...lines].join("\n");
  return `${contact.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

const fieldClass =
  "min-h-12 rounded-xl border border-line-strong bg-field px-3.5 text-base font-normal text-body outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";
const labelClass = "flex flex-col gap-2 text-sm font-semibold";

export default function ContactForm() {
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = buildWhatsAppUrl(e.currentTarget);
    window.open(url, "_blank", "noopener");
    setWhatsappUrl(url);
  }

  if (whatsappUrl) {
    return (
      <div className="flex flex-col gap-4 py-10" role="status">
        <div aria-hidden="true" className="flex items-center gap-2">
          <span className="h-12 w-12 rounded-full bg-brand" />
          <span className="h-5 w-5 rounded-full bg-accent" />
        </div>
        <h2 className="m-0 font-display text-4xl font-extrabold text-brand">Almost done — press send in WhatsApp.</h2>
        <p className="m-0 leading-relaxed text-muted">
          Your brief is ready in a WhatsApp chat with Akhtar Qureshi. Tap send there and we&apos;ll get in touch to
          discuss your stall and share a first 3D design.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-11 self-start rounded-full bg-brand px-5 py-2.5 text-[15px] font-semibold text-white no-underline hover:bg-brand-hover"
        >
          WhatsApp didn&apos;t open? Tap here
        </a>
        <button
          type="button"
          onClick={() => setWhatsappUrl(null)}
          className="min-h-11 cursor-pointer self-start rounded-full border border-line-strong bg-white px-5 py-2.5 text-[15px] font-semibold text-body hover:border-brand hover:text-brand"
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h2 className="m-0 mb-1 font-display text-[30px] font-extrabold text-brand">Request a free 3D design</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        <label className={labelClass}>
          Full name *
          <input name="name" type="text" required autoComplete="name" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Company *
          <input name="company" type="text" required autoComplete="organization" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Phone *
          <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Email
          <input name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Exhibition name
          <input name="exhibition" type="text" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Stall size (sq m / sq ft)
          <input name="size" type="text" className={fieldClass} />
        </label>
      </div>
      <label className={labelClass}>
        Stall type
        <select name="stallType" className={fieldClass} defaultValue="Inline / shell">
          <option>Inline / shell</option>
          <option>Corner stall</option>
          <option>Island stall</option>
          <option>Double-decker</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className={labelClass}>
        Tell us about your brand and what you&apos;ll display
        <textarea name="message" rows={5} className={`${fieldClass} resize-y py-3`} />
      </label>
      <button
        type="submit"
        className="min-h-[52px] cursor-pointer self-start rounded-full border-0 bg-brand px-[30px] py-3.5 text-base font-bold text-white hover:bg-brand-hover"
      >
        Send brief on WhatsApp
      </button>
    </form>
  );
}
