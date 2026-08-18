import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  "@type": "ProfessionalService",
  name: "Reveal Rank",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Reveal Rank is a performance-driven SEO and digital marketing agency helping US brands grow through data-backed strategies.",
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
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
