"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16l6 6 10-12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-6">We've received your request. Expect a response within 24 business hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#4361ee] font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Proposal</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">First Name *</label>
            <input
              type="text"
              name="first_name"
              required
              className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Last Name *</label>
            <input
              type="text"
              name="last_name"
              required
              className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">Business Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            placeholder="john@yourbusiness.com"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">Website URL</label>
          <input
            type="url"
            name="website"
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            placeholder="https://yourbusiness.com"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">Primary Service Interest</label>
          <select
            name="service"
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
          >
            <option value="">Select a service...</option>
            <option value="seo">SEO Services</option>
            <option value="local-seo">Local SEO</option>
            <option value="ppc">PPC / Google Ads</option>
            <option value="social">Social Media Marketing</option>
            <option value="content">Content Marketing</option>
            <option value="web">Web Design & Development</option>
            <option value="cro">Conversion Rate Optimisation</option>
            <option value="other">Other / Full Package</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">Monthly Budget (USD)</label>
          <select
            name="budget"
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
          >
            <option value="">Select budget range...</option>
            <option value="500-1000">$500 – $1,000</option>
            <option value="1000-2500">$1,000 – $2,500</option>
            <option value="2500-5000">$2,500 – $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">Tell us about your goals</label>
          <textarea
            name="message"
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#4361ee] text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
            placeholder="Describe your business, current challenges, and what you want to achieve..."
          />
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center">Something went wrong. Please email us directly at outreach@revealrank.com</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[#4361ee] hover:bg-[#3451de] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-md shadow-blue-100"
        >
          {status === "sending" ? "Sending..." : "Get My Free Proposal →"}
        </button>
        <p className="text-gray-400 text-xs text-center">
          No spam. No commitment. Response within 24 business hours.
        </p>
      </form>
    </div>
  );
}
