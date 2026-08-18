import Link from "next/link";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1F2122]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">Reveal</span>
                <span className="text-[#4361ee]">Rank</span>
              </span>
            </Link>
            <p className="text-[#888] text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s performance-driven digital marketing agency. We help brands grow through data-backed SEO,
              content, and paid media strategies.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/revealrank"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[#181A1B] rounded-lg flex items-center justify-center text-[#888] hover:text-white hover:bg-[#4361ee] transition-all"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com/revealrank"
                aria-label="Twitter/X"
                className="w-10 h-10 bg-[#181A1B] rounded-lg flex items-center justify-center text-[#888] hover:text-white hover:bg-[#4361ee] transition-all"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/revealrank"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#181A1B] rounded-lg flex items-center justify-center text-[#888] hover:text-white hover:bg-[#4361ee] transition-all"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[#888] hover:text-white text-sm transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Locations</h3>
            <ul className="space-y-2">
              {locations.slice(0, 10).map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-[#888] hover:text-white text-sm transition-colors">
                    {l.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-[#4361ee] hover:text-white text-sm transition-colors">
                  View All Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries & Pages */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Industries</h3>
            <ul className="space-y-2 mb-6">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-[#888] hover:text-white text-sm transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#888] hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#888] hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1F2122] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-sm">© {year} Reveal Rank. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-[#555] hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#555] hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
