import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Reveal Rank" width={94} height={81} />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Performance-driven SEO and digital marketing agency serving businesses across the United States. We deliver data-backed strategies that generate real traffic, leads, and revenue.
            </p>
            <a href="mailto:outreach@revealrank.com" className="text-gray-700 text-sm font-semibold hover:text-[#4361ee] transition-colors">
              outreach@revealrank.com
            </a>
            <div className="flex items-center gap-3 mt-5">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/revealrank", icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />, circle: <circle cx="4" cy="4" r="2" /> },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#4361ee] transition-all">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">{s.icon}{s.circle}</svg>
                </a>
              ))}

              <a href="https://www.facebook.com/people/Reveal-Rank/61583084368619/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#4361ee] transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/reveal_rank/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#4361ee] transition-all">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-xs uppercase tracking-widest">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-xs uppercase tracking-widest">Locations</h3>
            <ul className="space-y-2">
              {locations.slice(0, 10).map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-[#4361ee] hover:text-blue-600 text-sm transition-colors font-semibold">
                  View All Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries & Company */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-xs uppercase tracking-widest">Industries</h3>
            <ul className="space-y-2 mb-6">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-gray-900 font-bold mb-4 text-xs uppercase tracking-widest">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Contact</Link></li>
              <li><Link href="/sitemap.xml" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {year} Reveal Rank. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-900 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-900 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
