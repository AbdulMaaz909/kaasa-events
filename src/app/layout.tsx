import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Manrope } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Kaasa Events — Exhibition Stall Design & Fabrication, Mumbai",
    template: "%s — Kaasa Events",
  },
  description:
    "Kaasa Events designs exhibition stalls in 3D, fabricates them in-house and installs them on the show floor. Based in Mumbai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
