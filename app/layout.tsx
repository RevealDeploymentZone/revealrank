import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";

const BASE_URL = "https://www.revealrank.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Reveal Rank – Performance SEO & Digital Marketing Agency USA",
    template: "%s | Reveal Rank",
  },
  description:
    "Reveal Rank is a performance-driven SEO and digital marketing agency serving businesses across the United States. We deliver data-backed SEO, PPC, content marketing, and web development that grows traffic, leads, and revenue.",
  keywords: [
    "SEO agency USA",
    "digital marketing agency USA",
    "SEO services",
    "PPC management USA",
    "content marketing agency",
    "web design development USA",
    "Reveal Rank",
  ],
  authors: [{ name: "Reveal Rank", url: BASE_URL }],
  creator: "Reveal Rank",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Reveal Rank",
    title: "Reveal Rank – Performance SEO & Digital Marketing Agency USA",
    description:
      "Data-driven SEO, PPC, content marketing, and web development. We help US businesses dominate search rankings and grow revenue.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reveal Rank – SEO & Digital Marketing Agency USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reveal Rank – Performance SEO & Digital Marketing Agency USA",
    description: "Data-driven SEO, PPC, content marketing, and web development for US businesses.",
    images: ["/og-image.jpg"],
    site: "@revealrank",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Reveal Rank",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  description:
    "Reveal Rank is a performance-driven SEO and digital marketing agency helping US brands grow through data-backed strategies.",
  email: "outreach@revealrank.com",
  hasMap: "https://maps.app.goo.gl/revealrank",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.15658477166989,
    longitude: -75.5267290240507,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "outreach@revealrank.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/revealrank",
    "https://twitter.com/revealrank",
    "https://www.instagram.com/revealrank",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X3GCCSYYVC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X3GCCSYYVC');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <MapSection />
        <Footer />
      </body>
    </html>
  );
}
