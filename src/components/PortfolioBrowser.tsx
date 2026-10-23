"use client";

import Image from "next/image";
import { useState } from "react";
import { PageHero, Pill, ToggleChips } from "@/components/ui";
import { projects, type Shot } from "@/lib/site";

const filters = [
  { id: "all", label: "All projects" },
  { id: "pair", label: "3D design + real build" },
  { id: "built", label: "Built only" },
] as const;

type Filter = (typeof filters)[number]["id"];

function ShotGrid({ shots, tall }: { shots: Shot[]; tall?: boolean }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-4">
      {shots.map((im) => (
        <div
          key={im.src}
          className={`relative overflow-hidden rounded-2xl bg-mist ${tall ? "h-[340px] sm:h-[460px]" : "h-[280px] sm:h-[360px]"}`}
        >
          <Image src={im.src} alt={im.alt} fill sizes="(min-width: 768px) 600px, 100vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function PortfolioBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = projects.filter((p) => {
    if (filter === "all") return true;
    const hasRender = p.renders.length > 0;
    return filter === "pair" ? hasRender : !hasRender;
  });

  return (
    <>
      <PageHero
        eyebrow="PORTFOLIO"
        title={
          <>
            Designed on screen. <span className="text-brand">Built on the floor.</span>
          </>
        }
        intro="Where we have both, each project shows the 3D design we presented next to the stall we built."
      >
        <div className="pt-3">
          <ToggleChips label="Filter projects" options={filters} value={filter} onChange={setFilter} />
        </div>
      </PageHero>

      <section className="border-t border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 pb-[104px] pt-[72px]">
          {shown.map((p) => {
            const hasRender = p.renders.length > 0;
            return (
              <article key={p.id} className="flex flex-col gap-7 rounded-3xl border border-line bg-white p-6 sm:p-9">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div className="flex flex-col gap-2.5">
                    <div className="font-mono text-[13px] tracking-[0.12em] text-subtle">
                      {p.num} · {p.kind}
                    </div>
                    <h2 className="m-0 font-display text-[clamp(28px,3.2vw,42px)] font-extrabold tracking-[-0.01em] text-brand">
                      {p.name}
                    </h2>
                    <p className="m-0 max-w-[640px] text-[17px] leading-relaxed text-muted">{p.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Pill key={t} className="border border-line bg-mist text-muted">
                        {t}
                      </Pill>
                    ))}
                  </div>
                </div>

                {hasRender && (
                  <div className="flex flex-col gap-3">
                    <Pill className="self-start border border-brand tracking-[0.14em] text-brand">01 · 3D RENDER</Pill>
                    <ShotGrid shots={p.renders} />
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <Pill className="self-start bg-accent tracking-[0.14em] text-ink">
                    {hasRender ? "02 · BUILT ON SITE" : "BUILT ON SITE"}
                  </Pill>
                  <ShotGrid shots={p.builts} tall />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
