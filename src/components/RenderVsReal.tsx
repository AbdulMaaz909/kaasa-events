"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eyebrow, ToggleChips } from "@/components/ui";
import { showcase } from "@/lib/site";

type ShowcaseId = (typeof showcase)[number]["id"];

export default function RenderVsReal() {
  const [active, setActive] = useState<ShowcaseId>(showcase[0].id);
  const p = showcase.find((s) => s.id === active) ?? showcase[0];

  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-11 px-6 py-[104px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex max-w-[640px] flex-col gap-4">
            <Eyebrow>RENDER → REALITY</Eyebrow>
            <h2 className="m-0 font-display text-[clamp(36px,4.4vw,60px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
              The design you approve is the stall we hand over.
            </h2>
          </div>
          <ToggleChips label="Choose project" options={showcase} value={active} onChange={setActive} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <figure className="m-0 flex flex-col gap-3">
            <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-mist sm:h-[460px]">
              <Image src={p.render} alt={`${p.name} — 3D render`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              <div className="absolute left-4 top-4 rounded-full bg-white px-3.5 py-2 font-mono text-xs tracking-[0.12em] text-brand">
                01 · 3D RENDER
              </div>
            </div>
            <figcaption className="text-[15px] text-subtle">
              Concept as presented to the client — layout, lighting and graphics fixed before fabrication.
            </figcaption>
          </figure>
          <figure className="m-0 flex flex-col gap-3">
            <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-mist sm:h-[460px]">
              <Image src={p.built} alt={`${p.name} — built on the show floor`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              <div className="absolute left-4 top-4 rounded-full bg-accent px-3.5 py-2 font-mono text-xs tracking-[0.12em] text-ink">
                02 · BUILT ON SITE
              </div>
            </div>
            <figcaption className="text-[15px] text-subtle">{p.caption}</figcaption>
          </figure>
        </div>

        <Link href="/portfolio" className="self-start text-[17px] font-bold underline-offset-[6px]">
          View the full portfolio
        </Link>
      </div>
    </section>
  );
}
