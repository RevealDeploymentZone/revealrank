import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  primaryHref?: string;
}

export default function CTASection({
  title = "Ready to Dominate Search Rankings?",
  subtitle = "Get a free, no-obligation SEO audit and growth strategy from India's performance-driven digital marketing experts.",
  primaryCTA = "Get Your Free Proposal",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-[#181A1B]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[#4361ee] animate-pulse"></span>
          Available for New Projects
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h2>
        <p className="text-[#888] text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
          >
            {primaryCTA}
          </Link>
          <a
            href="tel:+91XXXXXXXXXX"
            className="border border-[#2a2a2a] hover:border-[#4361ee] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            Schedule a Call
          </a>
        </div>
        <p className="text-[#555] text-sm mt-6">No credit card required · Free 30-min strategy session · Response within 24hrs</p>
      </div>
    </section>
  );
}
