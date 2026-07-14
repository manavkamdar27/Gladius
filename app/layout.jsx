import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Gladius Law | High-Stakes Litigation, Mumbai",
  description:
    "Gladius Law is a specialist litigation chamber in Mumbai. Trial-first advocacy before the Bombay High Court, NCLT, and the Supreme Court of India. Defending Ambitions. Resolving Disputes.",
  openGraph: {
    title: "Gladius Law | Defending Ambitions. Resolving Disputes.",
    description:
      "Trial-first advocates for India's most consequential commercial battles.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-parchment text-ink font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
