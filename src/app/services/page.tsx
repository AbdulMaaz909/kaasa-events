import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import { CtaBand, PageHero, Pill, StepBadge } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "3D stall design, fabrication, double-decker stalls, lighting, graphics, installation and dismantling — one team from Kaasa Events.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title={
          <>
            One team from the first render <span className="text-brand">to the last screw.</span>
          </>
        }
        intro="You deal with one point of contact. We handle design, production, graphics, electricals and the build at the venue."
      />

      <section className="border-t border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
          {services.map((s, i) => {
            // Alternate image left / right; on narrow screens the image always sits on top.
            const imageFirst = i % 2 === 0;
            const image = (
              <div className="relative h-[280px] w-full min-w-0 flex-[1_1_520px] overflow-hidden rounded-2xl sm:h-[400px]">
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
              </div>
            );
            const text = (
              <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4 p-3">
                <StepBadge n={i + 1} size="lg" />
                <h2 className="m-0 font-display text-[clamp(28px,3vw,36px)] font-extrabold tracking-[-0.01em] text-brand">
                  {s.title}
                </h2>
                <p className="m-0 text-[17px] leading-[1.65] text-muted">{s.text}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Pill key={t} className="bg-mist tracking-normal">
                      {t}
                    </Pill>
                  ))}
                </div>
              </div>
            );
            return (
              <div
                key={s.title}
                className={`flex items-center gap-10 rounded-3xl border border-line bg-white p-6 ${
                  imageFirst ? "flex-wrap" : "flex-wrap-reverse"
                }`}
              >
                {imageFirst ? (
                  <>
                    {image}
                    {text}
                  </>
                ) : (
                  <>
                    {text}
                    {image}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand title="Tell us your stall size. We'll send a 3D design." href="/contact" label="Share your brief" />
      <Footer />
    </>
  );
}
