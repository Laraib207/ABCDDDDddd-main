import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SITE_NAME = "Veer Bharat";
const SITE_TITLE = "Veer Bharat | Premium Mustard, Soyabean, Sunflower & Palm Oil";
const SITE_DESC =
  "Veer Bharat — premium edible oils and brand rice from Ghaziabad. Trusted Indian brand for Kachi Ghani Mustard Oil, Soyabean Oil, Sunflower Oil and Palm Oil. FSSAI certified. Call 9266328444.";
const SITE_URL = "https://veerbharat.com"; // update if your live domain differs

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Veer Bharat",
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "Veer Bharat",
    "Mustard Oil",
    "Kachi Ghani Oil",
    "Soyabean Oil",
    "Sunflower Oil",
    "Palm Oil",
    "Brand Rice",
    "Edible Oil India",
    "Ghaziabad cooking oil",
  ],
  authors: [{ name: "Veer Bharat" }],
  creator: "Veer Bharat",
  publisher: "Veer Bharat",
  category: "Food & Beverage",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Veer Bharat — Premium Edible Oils",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    "google-site-verification": "r98v6O5kAtTe-6BdgRB11PQgQTopFn7x464rMPuWkIQ",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E2240",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veer Bharat",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESC,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9266328444",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
