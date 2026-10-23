import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { contact, leaders } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Share your exhibition and stall size — Kaasa Events will send a free 3D design and a quote.",
};

const cardClass = "flex flex-col gap-1.5 rounded-[20px] border border-line bg-white px-6 py-[22px] no-underline hover:border-brand";
const cardLabel = "font-mono text-xs tracking-[0.12em] text-subtle";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={
          <>
            Let&apos;s build <span className="text-brand">your next stall.</span>
          </>
        }
        intro="Share the exhibition and stall size. We'll come back with a free 3D design and a quote."
      />

      <section className="border-t border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-wrap items-start gap-10 px-6 pb-[104px] pt-[72px]">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
            {leaders.map((l) => (
              <a key={l.tel} href={`tel:${l.tel}`} className={cardClass}>
                <span className={cardLabel}>
                  {l.name.toUpperCase()} · {l.role.toUpperCase()}
                </span>
                <span className="font-display text-[26px] font-bold text-brand">{l.phone}</span>
              </a>
            ))}
            <a href={`mailto:${contact.email}`} className={cardClass}>
              <span className={cardLabel}>EMAIL</span>
              <span className="break-all font-display text-2xl font-bold text-brand">{contact.email}</span>
            </a>
            <div className="flex flex-col gap-2 rounded-[20px] bg-night p-6 text-snow">
              <span className="font-mono text-xs tracking-[0.12em] text-accent-soft">OFFICE</span>
              <address className="text-lg not-italic leading-[1.55]">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center self-start font-bold text-accent-soft hover:text-accent"
              >
                Open in Google Maps
              </a>
            </div>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center gap-2.5 self-start rounded-full bg-accent px-[26px] py-4 font-bold text-ink no-underline hover:bg-accent-soft hover:text-ink"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="box-border min-w-0 flex-[1_1_560px] rounded-3xl border border-line bg-white p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
