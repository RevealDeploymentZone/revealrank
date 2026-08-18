interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

export default function BreadcrumbSchema({ items, baseUrl = "https://www.revealrank.com" }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-[1280px] mx-auto px-4 lg:px-8 py-4">
        <ol className="flex items-center gap-2 text-sm text-[#666]">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {index === items.length - 1 ? (
                <span className="text-white">{item.name}</span>
              ) : (
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
