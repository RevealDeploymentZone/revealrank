"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Services",
      href: "/services",
      dropdown: services.map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` })),
    },
    {
      label: "Locations",
      href: "/locations",
      dropdown: locations.slice(0, 10).map((l) => ({
        label: `${l.city}, ${l.state}`,
        href: `/locations/${l.slug}`,
      })),
    },
    {
      label: "Industries",
      href: "/industries",
      dropdown: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
    },
    { label: "Portfolio", href: "/portfolio", dropdown: null },
    { label: "About", href: "/about", dropdown: null },
    { label: "Contact", href: "/contact", dropdown: null },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Reveal Rank" width={65} height={56} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.dropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 8L1 3h10L6 8z" />
                  </svg>
                )}
              </Link>
              {item.dropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white border border-gray-100 rounded-xl py-2 shadow-xl">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#4361ee] hover:bg-blue-50 transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-[#4361ee] font-semibold hover:bg-blue-50 transition-colors border-t border-gray-100 mt-1 pt-3"
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-[#4361ee] hover:bg-[#3451de] text-white text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md shadow-blue-100"
          >
            Get Free Proposal
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-gray-900 font-semibold hover:text-[#4361ee] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-8 pb-2">
                  {item.dropdown.slice(0, 5).map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      className="block py-2 text-sm text-gray-500 hover:text-[#4361ee] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-6 pt-4">
            <Link
              href="/contact"
              className="block text-center bg-[#4361ee] text-white font-bold py-3 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
