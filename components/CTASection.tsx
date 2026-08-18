import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  primaryHref?: string;
}

export default function CTASection({
  title = "Ready to Dominate Search Rankings?",
  subtitle = "Get a free, no-obligation SEO audit and growth strategy from a performance-driven digital marketing agency.",
  primaryCTA = "Get Your Free Proposal",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-[#4361ee] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 120%, #ffffff 0%, transparent 70%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          Available for New Projects
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{title}</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="bg-white hover:bg-gray-50 text-[#4361ee] font-black px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:scale-105"
          >
            {primaryCTA}
          </Link>
          <a
            href="mailto:outreach@revealrank.com"
            className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            outreach@revealrank.com
          </a>
        </div>
        <p className="text-blue-200 text-sm mt-6">No credit card required · Free 30-min strategy session · Response within 24hrs</p>
      </div>
    </section>
  );
}
