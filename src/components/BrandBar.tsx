/** Two-tone purple/orange strip at the top of the page and bottom of the footer. */
export default function BrandBar({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" className={`flex h-2 ${flip ? "flex-row-reverse" : ""}`}>
      <div className="flex-1 bg-brand" />
      <div className="flex-[2] bg-accent" />
    </div>
  );
}
