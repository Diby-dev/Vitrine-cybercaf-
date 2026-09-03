import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CYBERTECH Lounge & Services | Cyber Café, Formations Excel/Word & Imprimerie HD",
  description:
    "Cyber café moderne & espace numérique haut de gamme : accès PC fibre optique 1Gbps, formations bureautiques guidées (Excel, Word, Windows), centre d'imprimerie couleur & reliure, et rédaction professionnelle de documents.",
  keywords: [
    "cyber café",
    "espace numérique",
    "formation excel",
    "formation word",
    "imprimerie",
    "scan hd",
    "rédaction cv",
    "accès pc internet",
    "impression mémoire",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sansFont.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
