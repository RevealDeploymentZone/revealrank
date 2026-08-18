import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Reveal Rank" width={94} height={81} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Performance-driven SEO and digital marketing agency serving businesses across the United States. We deliver data-backed strategies that generate real traffic, leads, and revenue.
            </p>
            <a href="mailto:outreach@revealrank.com" className="text-[#4361ee] text-sm font-semibold hover:text-blue-400 transition-colors">
              outreach@revealrank.com
            </a>
            <div className="flex items-center gap-3 mt-5">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/revealrank", icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />, circle: <circle cx="4" cy="4" r="2" /> },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4361ee] transition-all">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">{s.icon}{s.circle}</svg>
                </a>
              ))}
              <a href="https://twitter.com/revealrank" aria-label="Twitter" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4361ee] transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest text-gray-400">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-gray-400 font-bold mb-4 text-xs uppercase tracking-widest">Locations</h3>
            <ul className="space-y-2">
              {locations.slice(0, 10).map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-[#4361ee] hover:text-blue-400 text-sm transition-colors font-semibold">
                  View All Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries & Company */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest text-gray-400">Industries</h3>
            <ul className="space-y-2 mb-6">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest text-gray-400">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {year} Reveal Rank. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
