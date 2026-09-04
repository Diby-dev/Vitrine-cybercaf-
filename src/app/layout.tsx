import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const siteUrl = "https://benicytech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Benicytech | Cybercafé & Espace Numérique à Abidjan Yopougon Micao",
    template: "%s | Benicytech Abidjan",
  },
  description:
    "Benicytech, votre Cybercafé & Espace Numérique à Abidjan Yopougon Micao. Accès PC Internet Fibre, formations Excel/Word, imprimerie HD & rédaction de CV.",
  keywords: [
    "cybercafé abidjan",
    "cybercafé yopougon",
    "cybercafé micao",
    "benicytech",
    "espace numérique abidjan",
    "formation excel abidjan",
    "formation word yopougon",
    "imprimerie mémoire yopougon",
    "rédaction cv abidjan",
    "accès internet fibre abidjan",
    "secrétariat bureautique ci",
  ],
  authors: [{ name: "Benicytech Espace Numérique", url: siteUrl }],
  creator: "Benicytech",
  publisher: "Benicytech",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Benicytech | Cybercafé & Espace Numérique à Abidjan Yopougon Micao",
    description:
      "Accès PC Internet Fibre 1Gbps, formations guidées sur Microsoft Excel & Word, centre d'imprimerie couleur HD et rédaction professionnelle de CV & mémoires.",
    url: siteUrl,
    siteName: "Benicytech Lounge & Services",
    locale: "fr_CI",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/cybe.jpg`,
        width: 1200,
        height: 630,
        alt: "Benicytech Cybercafé & Espace Numérique à Abidjan Yopougon Micao",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benicytech | Cybercafé & Espace Numérique à Abidjan Yopougon",
    description:
      "Accès PC Fibre, formations Excel/Word, impression HD & rédaction de CV à Yopougon Micao.",
    images: [`${siteUrl}/images/cybe.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data Schema (LocalBusiness / Local Service) for Rich Snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Benicytech - Cybercafé & Espace Numérique",
  "image": `${siteUrl}/images/cybe.jpg`,
  "@id": siteUrl,
  "url": siteUrl,
  "telephone": "+2250676190897",
  "email": "benicytech200@gmail.com",
  "priceRange": "FCFA",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Yopougon, Micao, le terrain",
    "addressLocality": "Abidjan",
    "addressRegion": "Lagunes",
    "addressCountry": "CI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 5.3364,
    "longitude": -4.0792
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "15:00"
    }
  ],
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Numériques",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Navigation PC & Accès Internet Fibre"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formations Informatiques Excel & Word"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Imprimerie, Scan & Reliure de Mémoire"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rédaction & Mise en page de CV"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sansFont.variable} scroll-smooth`}>
      <head>
        {/* Inject JSON-LD Structured Data Schema for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
