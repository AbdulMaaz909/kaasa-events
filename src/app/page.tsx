import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import RenderVsReal from "@/components/RenderVsReal";
import { ButtonLink, CircleCluster, Eyebrow, StepBadge } from "@/components/ui";
import { clientBrands, leaders, processSteps, serviceSummaries } from "@/lib/site";

const stats = [
  { value: "[XX]+", label: "Years building stalls" },
  { value: "[XXX]+", label: "Stalls delivered" },
  { value: "[XX]", label: "Cities / venues" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-stripes absolute inset-x-0 top-14 h-[380px]" />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center gap-16 px-6 pb-24 pt-[88px]">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
            <div className="self-start bg-white py-1.5 pr-2.5 font-mono text-[13px] tracking-[0.14em] text-brand">
              EXHIBITION STALL DESIGN &amp; FABRICATION · MUMBAI
            </div>
            <h1 className="m-0 bg-white font-display text-[clamp(44px,6vw,84px)] font-extrabold leading-[0.98] tracking-[-0.02em] text-ink font-stretch-[105%]">
              We design it in 3D.
              <br />
              <span className="text-brand">Then we build it for real.</span>
            </h1>
            <p className="m-0 max-w-[520px] text-[19px] leading-relaxed text-muted">
              Kaasa Events takes your stall from first sketch to the show floor — 3D concept, in-house fabrication,
              branding, lighting and on-site installation. What you approve on screen is what your visitors walk into.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <ButtonLink href="/portfolio">See render vs. real</ButtonLink>
              <ButtonLink href="/contact" variant="accent">
                Share your brief
              </ButtonLink>
            </div>
            <div className="flex flex-wrap gap-10 border-t border-line pt-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[40px] font-extrabold text-brand">{s.value}</div>
                  <div className="text-sm text-subtle">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] min-w-0 flex-[1_1_520px] sm:h-[660px]">
            <CircleCluster full className="absolute -right-2.5 -top-[30px] z-0" />
            <div className="absolute right-0 top-[90px] z-[1] h-[380px] w-[70%] overflow-hidden rounded-[20px] shadow-[0_24px_48px_rgba(46,42,51,0.18)] sm:right-10 sm:top-[120px] sm:h-[520px] sm:w-[56%]">
              <Image
                src="/images/nine-plus-nine-built-visitors.jpg"
                alt="Nine Plus Nine stall H-10, built on site"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 70vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-4 top-[106px] z-[2] rounded-full bg-accent px-3 py-2 font-mono text-xs tracking-[0.12em] text-ink sm:right-14 sm:top-[136px]">
              BUILT · STALL H-10
            </div>
            <div className="absolute bottom-0 left-0 z-[2] w-[70%] rounded-[18px] bg-white p-2.5 shadow-[0_24px_48px_rgba(46,42,51,0.2)] sm:w-[56%]">
              <div className="relative h-[160px] overflow-hidden rounded-xl sm:h-[230px]">
                <Image
                  src="/images/nine-plus-nine-render-front.jpg"
                  alt="Nine Plus Nine stall, 3D render"
                  fill
                  sizes="(min-width: 1024px) 400px, 70vw"
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between px-1 pb-0.5 pt-2.5 font-mono text-xs tracking-[0.12em] text-brand">
                <span>RENDER · 3D</span>
                <span className="text-subtle">NINE PLUS NINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-12 gap-y-4 px-6 py-8">
          <div className="font-mono text-xs tracking-[0.14em] text-subtle">BRANDS WE&apos;VE BUILT FOR</div>
          {clientBrands.map((b) => (
            <div key={b} className="font-display text-[22px] font-bold text-body">
              {b}
            </div>
          ))}
        </div>
      </section>

      <RenderVsReal />

      {/* SERVICES */}
      <section className="bg-mist">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-[104px]">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="m-0 max-w-[640px] font-display text-[clamp(36px,4.4vw,60px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
              Everything your stall needs, under one roof.
            </h2>
            <Link href="/services" className="font-bold underline-offset-[6px]">
              All services
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {serviceSummaries.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3.5 rounded-[20px] border border-line bg-white p-8">
                <StepBadge n={i + 1} />
                <h3 className="m-0 font-display text-2xl font-bold text-brand">{s.title}</h3>
                <p className="m-0 leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div aria-hidden="true" className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-brand-deep" />
        <div aria-hidden="true" className="absolute right-[200px] top-10 h-10 w-10 rounded-full bg-accent" />
        <div aria-hidden="true" className="absolute right-[170px] top-[100px] h-3.5 w-3.5 rounded-full bg-accent" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24">
          <h2 className="m-0 max-w-[80%] font-display text-[clamp(32px,3.6vw,48px)] font-extrabold tracking-[-0.02em]">
            From brief to show floor in four steps
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
            {processSteps.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3 border-t-[3px] border-accent pt-[22px]">
                <div className="font-mono text-[13px] text-accent-soft">STEP 0{i + 1}</div>
                <h3 className="m-0 font-display text-[22px]">{s.title}</h3>
                <p className="m-0 leading-relaxed text-lavender">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP CTA */}
      <section className="mx-auto flex max-w-7xl flex-wrap items-center gap-14 px-6 py-[104px]">
        <div className="relative h-[360px] min-w-0 flex-[1_1_420px] overflow-hidden rounded-3xl sm:h-[520px]">
          <Image
            src="/images/team-meeting.jpg"
            alt="Akhtar Qureshi and Irfan Qureshi in a client meeting"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <Eyebrow>TALK TO THE PEOPLE WHO BUILD IT</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(32px,3.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
            Got an exhibition coming up? Get a free 3D design.
          </h2>
          <p className="m-0 text-lg leading-relaxed text-muted">
            Send your stall size and show dates. Akhtar or Irfan will call you back directly.
          </p>
          <div className="flex flex-col text-[17px]">
            {leaders.map((l) => (
              <a
                key={l.tel}
                href={`tel:${l.tel}`}
                className="flex min-h-11 flex-wrap justify-between gap-4 border-b border-line py-3.5 text-body no-underline hover:text-body"
              >
                <span>
                  {l.name} · {l.role}
                </span>
                <span className="font-mono text-brand">{l.phone}</span>
              </a>
            ))}
          </div>
          <ButtonLink href="/contact" className="self-start">
            Request a quote
          </ButtonLink>
        </div>
      </section>

      <Footer variant="full" />
    </>
  );
}
