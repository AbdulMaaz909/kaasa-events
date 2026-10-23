import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Eyebrow } from "@/components/ui";
import { leaders, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kaasa Events is a Mumbai exhibition stall builder that shows you the stall in 3D before it's built. Meet Akhtar and Irfan Qureshi.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-stripes absolute inset-x-0 top-10 h-[300px]" />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center gap-14 px-6 pb-[88px] pt-[72px]">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-[22px]">
            <Eyebrow className="self-start bg-white py-1.5 pr-2.5">ABOUT KAASA EVENTS</Eyebrow>
            <h1 className="m-0 bg-white font-display text-[clamp(42px,5.4vw,72px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
              A Mumbai stall builder that shows you <span className="text-brand">the stall before it&apos;s built.</span>
            </h1>
            <p className="m-0 text-lg leading-[1.65] text-muted">
              Kaasa Events designs and fabricates exhibition stalls for brands across jewellery, industrial machinery,
              security and HVAC. Every project starts as a 3D design the client signs off on, and ends with our own crew
              building it on the show floor. [Add founding year and one line on your story.]
            </p>
          </div>
          <div className="relative min-w-0 flex-[1_1_440px] pt-10">
            <div aria-hidden="true" className="absolute -right-4 top-0 h-[120px] w-[120px] rounded-full bg-brand" />
            <div aria-hidden="true" className="absolute right-[110px] top-3 h-[34px] w-[34px] rounded-full bg-accent" />
            <div aria-hidden="true" className="absolute -bottom-[18px] -left-[18px] h-16 w-16 rounded-full bg-accent" />
            <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[540px]">
              <Image
                src="/images/team-meeting.jpg"
                alt="Kaasa Events leadership in a client meeting"
                fill
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>LEADERSHIP</Eyebrow>
            <h2 className="m-0 font-display text-[clamp(36px,4.4vw,56px)] font-extrabold tracking-[-0.02em] text-ink">
              The people you&apos;ll work with
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-8">
            {leaders.map((l) => (
              <article key={l.name} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
                <div className="relative h-[420px] sm:h-[500px]">
                  <Image
                    src={l.photo}
                    alt={`${l.name}, ${l.role}`}
                    fill
                    sizes="(min-width: 768px) 600px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-2.5 p-7">
                  <div className="self-start rounded-full bg-accent px-3.5 py-[7px] font-mono text-xs tracking-[0.14em] text-ink">
                    {l.role.toUpperCase()}
                  </div>
                  <h3 className="m-0 font-display text-[32px] font-extrabold text-brand">{l.name}</h3>
                  <p className="m-0 leading-relaxed text-muted">{l.bio}</p>
                  <a
                    href={`tel:${l.tel}`}
                    className="inline-flex min-h-11 items-center self-start py-2.5 font-mono text-[17px] font-medium"
                  >
                    {l.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div aria-hidden="true" className="absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full bg-brand-deep" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10 px-6 py-[88px]">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-3 border-t-[3px] border-accent pt-[22px]">
              <h3 className="m-0 font-display text-2xl">{v.title}</h3>
              <p className="m-0 leading-relaxed text-lavender">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
