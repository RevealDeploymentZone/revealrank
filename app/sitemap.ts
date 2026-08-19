import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";

const BASE_URL = "https://www.revealrank.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/contact/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/locations/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/industries/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/portfolio/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy/`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms/`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationPages = locations
    .filter((l) => l.slug !== "denver-co")
    .map((l) => ({
      url: `${BASE_URL}/locations/${l.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const industryPages = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...industryPages];
}
