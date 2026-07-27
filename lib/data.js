import {
  Scale,
  Landmark,
  Building2,
  ShieldCheck,
  Gavel,
  FileText,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "The Firm", href: "#firm" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Impact", href: "#impact" },
  { label: "Counsel", href: "#counsel" },
  { label: "Mumbai Footprint", href: "#footprint" },
];

export const PRACTICES = [
  {
    icon: Scale,
    title: "Commercial Litigation",
    desc: "Suits, injunctions, and summary judgments before the Commercial Division, Bombay High Court.",
    metrics: [
      ["Active matters", "64"],
      ["Avg. interim relief", "11 days"],
    ],
  },
  {
    icon: Building2,
    title: "Corporate & Shareholder Disputes",
    desc: "Oppression & mismanagement, board deadlock, and JV exit battles under the Companies Act, 2013.",
    metrics: [
      ["S.241/242 petitions", "38"],
      ["Boardroom wins", "91%"],
    ],
  },
  {
    icon: ShieldCheck,
    title: "White Collar Crime",
    desc: "Defense in ED, SFIO, EOW, and SEBI enforcement — from summons strategy to trial.",
    metrics: [
      ["Bail success rate", "88%"],
      ["Quashed FIRs", "27"],
    ],
  },
  {
    icon: Landmark,
    title: "Constitutional Advocacy",
    desc: "Writ petitions and appeals before the Bombay High Court and the Supreme Court of India.",
    metrics: [
      ["SC appearances", "120+"],
      ["Reported judgments", "43"],
    ],
  },
  {
    icon: FileText,
    title: "Insolvency & Restructuring",
    desc: "CIRP, resolution-plan challenges, and avoidance actions before NCLT Mumbai and NCLAT.",
    metrics: [
      ["CIRP mandates", "52"],
      ["Recovery secured", "₹2,100 Cr"],
    ],
  },
  {
    icon: Gavel,
    title: "Arbitration & Enforcement",
    desc: "SIAC, MCIA, and ad-hoc arbitrations; S.9 relief and award enforcement across jurisdictions.",
    metrics: [
      ["Seated arbitrations", "45"],
      ["Awards enforced", "₹880 Cr"],
    ],
  },
];

export const STATS = [
  { target: 150, prefix: "", suffix: "+", label: "Successful bench trials" },
  { target: 5000, prefix: "₹", suffix: "+ Cr", label: "Disputed value under mandate" },
  { target: 120, prefix: "", suffix: "+", label: "Supreme Court appearances" },
  { target: 92, prefix: "", suffix: "%", label: "Favourable outcomes since 2019" },
];

export const BENCHES = [
  {
    id: "bhc",
    short: "Bombay HC",
    name: "Bombay High Court",
    seat: "Fort, Mumbai",
    since: "2009",
    focus:
      "Commercial Division suits, writ petitions, arbitration relief under S.9 & S.34.",
    highlights: [
      "Secured a ₹640 Cr worldwide freezing injunction in a promoter-fund dispute (2024).",
      "Defended a listed pharma major in a 6-week patent-linked commercial trial to judgment.",
      "Daily appearance practice before the Commercial and Appellate Divisions.",
    ],
    x: 120,
    y: 210,
  },
  {
    id: "nclt",
    short: "NCLT Mumbai",
    name: "National Company Law Tribunal",
    seat: "Cuffe Parade, Mumbai",
    since: "2017",
    focus:
      "CIRP admissions and defenses, oppression & mismanagement, scheme sanctions.",
    highlights: [
      "Resisted admission of a ₹1,200 Cr S.7 petition for a Mumbai infrastructure group.",
      "Steered a contested resolution plan for a steel-sector corporate debtor to approval.",
      "38 petitions under S.241/242 for boards, promoters, and minority shareholders.",
    ],
    x: 235,
    y: 300,
  },
  {
    id: "sc",
    short: "Supreme Court",
    name: "Supreme Court of India",
    seat: "New Delhi",
    since: "2012",
    focus:
      "SLPs, constitutional questions, and appeals arising from Bombay HC and NCLAT.",
    highlights: [
      "43 reported judgments including two Constitution Bench appearances.",
      "Obtained a stay of NCLAT liquidation orders within 72 hours for a logistics debtor.",
      "Regular briefing counsel to three Senior Advocates of the Supreme Court bar.",
    ],
    x: 330,
    y: 90,
  },
];

export const COUNSEL = [
  {
    name: "Ruchi Kamdar",
    initials: "RK",
    role: "Founder",
    credentials: "B.L.S., LL.B.",
    enrolled: "2019",
    forums: "Bombay High Court · MahaRERA · NCLT",
    line:
      "Founded the firm to deliver efficient, client-focused advocacy in real estate litigation, arbitration & ADR, money recovery, and civil & commercial disputes.",
    photo: "/images/ruchi.png",
  },
  {
    name: "Kiran Gandhi",
    initials: "KG",
    role: "Co-Founder",
    credentials: "B.Com., LL.B.",
    enrolled: "1996",
    forums: "Bombay High Court · MERC · NCLT",
    line:
      "Nearly three decades at the bar, advising on electricity, insolvency, labour & employment, and arbitration matters before courts and tribunals.",
    photo: "/images/kiran.png",
  },
];

export const JUDGMENTS = [
  {
    cite: "Bom HC · Comm. Div. · 2024",
    result: "₹640 Cr worldwide freezing injunction granted",
  },
  {
    cite: "Supreme Court · 2023",
    result: "Liquidation order stayed within 72 hours",
  },
  {
    cite: "NCLT Mumbai · 2024",
    result: "₹1,200 Cr S.7 admission successfully resisted",
  },
  {
    cite: "Bom HC · 2023",
    result: "6-week patent-linked commercial trial won to judgment",
  },
  {
    cite: "NCLAT · 2022",
    result: "Contested steel-sector resolution plan approved",
  },
  {
    cite: "Sessions Court, Mumbai · 2024",
    result: "Anticipatory bail secured for full board in SFIO probe",
  },
  {
    cite: "MCIA Arbitration · 2023",
    result: "₹880 Cr award enforced across three jurisdictions",
  },
];
