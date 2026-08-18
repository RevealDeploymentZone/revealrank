import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://www.revealrank.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Reveal Rank – Performance SEO & Digital Marketing Agency India",
    template: "%s | Reveal Rank",
  },
  description:
    "Reveal Rank is India's performance-driven SEO and digital marketing agency. We deliver data-backed SEO, PPC, content marketing, and web development that grows traffic, leads, and revenue.",
  keywords: [
    "SEO agency India",
    "digital marketing agency India",
    "SEO services",
    "PPC management India",
    "content marketing agency",
    "web design development India",
    "Reveal Rank",
  ],
  authors: [{ name: "Reveal Rank", url: BASE_URL }],
  creator: "Reveal Rank",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Reveal Rank",
    title: "Reveal Rank – Performance SEO & Digital Marketing Agency India",
    description:
      "Data-driven SEO, PPC, content marketing, and web development. We help Indian businesses dominate search rankings and grow revenue.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reveal Rank – SEO & Digital Marketing Agency India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reveal Rank – Performance SEO & Digital Marketing Agency India",
    description: "Data-driven SEO, PPC, content marketing, and web development for Indian businesses.",
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
    "Reveal Rank is a performance-driven SEO and digital marketing agency in India helping brands grow through data-backed strategies.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@revealrank.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/revealrank",
    "https://twitter.com/revealrank",
    "https://www.instagram.com/revealrank",
  ],
  serviceArea: {
    "@type": "Country",
    name: "India",
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
