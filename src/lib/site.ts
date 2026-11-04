export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;

export const contact = {
  email: "kaasaevents@gmail.com",
  addressLines: [
    "Office No. 4, Kasam Chunawala Compound,",
    "Chunabhatti, Kalina, Santacruz East,",
    "Mumbai 400029",
  ],
  mapsUrl:
    "https://maps.google.com/?q=Kasam+Chunawala+Compound+Kalina+Santacruz+East+Mumbai+400029",
  whatsappUrl: "https://wa.me/917506073607",
};

export type Leader = {
  name: string;
  role: string;
  phone: string;
  tel: string;
  photo: string;
  bio: string;
};

export const leaders: Leader[] = [
  {
    name: "Akhtar Qureshi",
    role: "Proprietor & CEO",
    phone: "+91 9049081419",
    tel: "+917506073607",
    photo: "/images/akhtar-qureshi.jpg",
    bio: "[One or two lines on Akhtar's experience and role.]",
  },
  {
    name: "Irfan Qureshi",
    role: "Manager",
    phone: "+91 74001 45925",
    tel: "+917400145925",
    photo: "/images/irfan-qureshi.jpg",
    bio: "[One or two lines on Irfan's experience and role.]",
  },
];

export const clientBrands = [
  "Nine Plus Nine",
  "Om Galaxy Limited",
  "Matrix Telecom | Security",
  "VTS Clima India",
];

export type Shot = { src: string; alt: string };

export type Project = {
  id: string;
  num: string;
  kind: string;
  name: string;
  desc: string;
  tags: string[];
  renders: Shot[];
  builts: Shot[];
};

export const projects: Project[] = [
  {
    id: "n99",
    num: "01",
    kind: "JEWELLERY EXHIBITION",
    name: "Nine Plus Nine — Stall H-10",
    desc: 'A boutique for "The House of Timeless Mangalsutras": lit display walls, glass counters and seating for one-to-one selling.',
    tags: ["3D + BUILD", "CORNER STALL", "[EXHIBITION NAME]"],
    renders: [
      { src: "/images/nine-plus-nine-render-side.jpg", alt: "Nine Plus Nine render, side view" },
      { src: "/images/nine-plus-nine-render-front.jpg", alt: "Nine Plus Nine render, front view" },
    ],
    builts: [
      { src: "/images/nine-plus-nine-built-visitors.jpg", alt: "Nine Plus Nine stall built, with visitors" },
      { src: "/images/nine-plus-nine-built-front.jpg", alt: "Nine Plus Nine stall built, front view" },
    ],
  },
  {
    id: "omg",
    num: "02",
    kind: "INDUSTRIAL EXHIBITION",
    name: "Om Galaxy Limited",
    desc: "A double-decker stand for moulds and hot-runner systems, with fluted panels, backlit product graphics, LED TVs and an upper meeting deck.",
    tags: ["3D + BUILD", "DOUBLE-DECKER", "[EXHIBITION NAME]"],
    renders: [
      { src: "/images/om-galaxy-render-front.jpg", alt: "Om Galaxy render, front elevation with graphic sizes" },
      { src: "/images/om-galaxy-render-perspective.jpg", alt: "Om Galaxy render, perspective with LED TV sizes" },
    ],
    builts: [
      { src: "/images/om-galaxy-built-front.jpg", alt: "Om Galaxy stall built, front" },
      { src: "/images/om-galaxy-built-corner.jpg", alt: "Om Galaxy stall built, corner view with visitors" },
    ],
  },
  {
    id: "mtx",
    num: "03",
    kind: "SECURITY & TELECOM",
    name: "Matrix Telecom | Security — Stall SC15",
    desc: "A corner stall with backlit logo headers, product walls for cameras and access control, and LED-lined counters.",
    tags: ["BUILD", "CORNER STALL", "[EXHIBITION NAME]"],
    renders: [],
    builts: [{ src: "/images/matrix-built.jpg", alt: "Matrix stall SC15 built" }],
  },
  {
    id: "vts",
    num: "04",
    kind: "HVAC",
    name: "VTS Clima India",
    desc: "An island stand with a lit central drum, product display zones for air-handling units and a branded reception counter.",
    tags: ["BUILD", "ISLAND STALL", "[EXHIBITION NAME]"],
    renders: [],
    builts: [
      { src: "/images/vts-built-corner.jpg", alt: "VTS stall built, corner" },
      { src: "/images/vts-built-reception.jpg", alt: "VTS stall built, reception counter" },
    ],
  },
];

/** Render-vs-real pairs shown on the home page. */
export const showcase = [
  {
    id: "n99",
    label: "Nine Plus Nine",
    name: "Nine Plus Nine",
    render: "/images/nine-plus-nine-render-side.jpg",
    built: "/images/nine-plus-nine-built-visitors.jpg",
    caption:
      "Nine Plus Nine, Stall H-10 — mangalsutra display walls, glass counters and LED outlines, built to the render.",
  },
  {
    id: "omg",
    label: "Om Galaxy (double-decker)",
    name: "Om Galaxy Limited",
    render: "/images/om-galaxy-render-perspective.jpg",
    built: "/images/om-galaxy-built-corner.jpg",
    caption:
      "Om Galaxy Limited — double-decker stand with fluted panels, backlit graphics and an upper meeting deck.",
  },
];

export const serviceSummaries = [
  { title: "3D Stall Design", text: "Photoreal renders with marked graphic sizes, so print and fabrication start from exact numbers." },
  { title: "Fabrication", text: "Wood, laminate, glass display cases, fluted panels and counters — built in our workshop." },
  { title: "Double-Decker Stalls", text: "Two-level stands with meeting decks and staircases for brands that need more floor than the plot gives." },
  { title: "Lighting, LED & AV", text: "LED strip outlines, backlit panels and wall-mounted LED TVs, wired and tested before opening day." },
  { title: "Branding & Graphics", text: "Backlit fabric, 3D logos and product panels printed to the sizes in the approved design." },
  { title: "Installation & On-site Support", text: "Our team sets up at the venue, stays for fixes during the show and handles dismantling." },
];

export const services = [
  {
    title: "3D Stall Design",
    text: "Photoreal renders from every angle, with each backlit panel, logo and LED TV marked to size. You approve the exact stall before a single board is cut.",
    tags: ["RENDERS", "DIMENSIONED GRAPHICS", "REVISIONS"],
    image: { src: "/images/om-galaxy-render-front.jpg", alt: "3D render with graphic sizes marked" },
  },
  {
    title: "Fabrication & Double-Decker Stalls",
    text: "Custom structures, fluted and laminated panels, glass display counters and staircases — including two-level stands with an upper meeting deck.",
    tags: ["CUSTOM STALLS", "DOUBLE-DECKER", "ISLAND · CORNER · INLINE"],
    image: { src: "/images/om-galaxy-built-front.jpg", alt: "Om Galaxy double-decker stall built" },
  },
  {
    title: "Lighting, LED, AV & Graphics",
    text: "LED strip outlines, backlit logo headers, fabric backlits, product panels and wall-mounted screens — printed, wired and tested on site.",
    tags: ["BACKLITS", "LED STRIPS", "LED TVS"],
    image: { src: "/images/matrix-built.jpg", alt: "Matrix stall with LED-lined counters and backlit logos" },
  },
  {
    title: "Installation, Show Support & Dismantling",
    text: "Our crew builds at the venue to the organiser's schedule, stays on call through the show and clears the plot after.",
    tags: ["ON-SITE CREW", "FURNITURE", "DISMANTLE"],
    image: { src: "/images/vts-built-reception.jpg", alt: "VTS island stall ready for visitors" },
  },
];

export const processSteps = [
  { title: "Share your brief", text: "Exhibition name, stall number, size, brand guidelines and products to display." },
  { title: "Approve the 3D design", text: "We send renders with dimensions. You revise until it's right." },
  { title: "We fabricate", text: "Structure, finishes, graphics and lighting are produced in our workshop." },
  { title: "Install & go live", text: "We build at the venue and hand over a stall ready for visitors." },
];

export const values = [
  { title: "Render = reality", text: "What you approve in 3D is what we build. Our portfolio puts both side by side." },
  { title: "Our own workshop", text: "Fabrication stays in-house, so quality and deadlines stay in our hands." },
  { title: "Direct access", text: "You call the people running the job — no layers in between." },
];
