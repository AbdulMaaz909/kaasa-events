import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PortfolioBrowser from "@/components/PortfolioBrowser";
import { CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Exhibition stalls by Kaasa Events — the 3D design we presented next to the stall we built.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBrowser />
      <CtaBand title="Want your stall on this page next?" href="/contact" label="Get a free 3D design" />
      <Footer />
    </>
  );
}
