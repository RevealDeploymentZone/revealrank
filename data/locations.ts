export interface Location {
  city: string;
  slug: string;
  state: string;
  population: string;
  description: string;
  marketInsight: string;
  industries: string[];
  landmarks: string[];
}

export const locations: Location[] = [
  {
    city: "Delhi",
    slug: "delhi",
    state: "Delhi NCR",
    population: "32 million",
    description:
      "India's capital and largest metropolis, home to a thriving ecosystem of businesses ranging from government contractors and multinational corporations to startups and SMEs across every sector.",
    marketInsight:
      "Delhi's digital market is one of the most competitive in Asia, with businesses across retail, real estate, hospitality, and professional services all competing aggressively for online visibility.",
    industries: [
      "Real Estate",
      "Hospitality",
      "Retail",
      "Government & PSU",
      "Education",
    ],
    landmarks: [
      "Connaught Place",
      "Karol Bagh",
      "Saket",
      "Lajpat Nagar",
      "Dwarka",
    ],
  },
  {
    city: "Mumbai",
    slug: "mumbai",
    state: "Maharashtra",
    population: "21 million",
    description:
      "India's financial capital and home to the Bombay Stock Exchange, Bollywood, and headquarters of India's largest corporations. Mumbai's business landscape is unmatched in scale and diversity.",
    marketInsight:
      "Mumbai businesses face fierce competition online. A strong digital presence is non-negotiable for finance, media, entertainment, and luxury brands targeting Mumbai's affluent consumer base.",
    industries: [
      "Finance & Banking",
      "Media & Entertainment",
      "Fashion & Luxury",
      "Real Estate",
      "Shipping & Logistics",
    ],
    landmarks: [
      "Bandra-Kurla Complex",
      "Nariman Point",
      "Andheri",
      "Lower Parel",
      "Powai",
    ],
  },
  {
    city: "Bangalore",
    slug: "bangalore",
    state: "Karnataka",
    population: "13 million",
    description:
      "India's Silicon Valley and the hub of the country's technology and startup ecosystem. Bangalore hosts thousands of IT companies, global MNCs, and fast-growing startups that require sophisticated digital marketing.",
    marketInsight:
      "Bangalore's tech-savvy population expects businesses to have an impeccable online presence. SEO and content marketing are critical for B2B SaaS, IT services, and consumer tech brands.",
    industries: [
      "Technology & IT",
      "SaaS & Startups",
      "E-Commerce",
      "Healthcare",
      "Education",
    ],
    landmarks: ["Whitefield", "Koramangala", "MG Road", "Electronic City", "Indiranagar"],
  },
  {
    city: "Hyderabad",
    slug: "hyderabad",
    state: "Telangana",
    population: "10 million",
    description:
      "A rapidly growing IT and pharmaceutical hub that blends India's rich Nizami culture with world-class infrastructure. Hyderabad is home to HITEC City, a major IT cluster, and a booming real estate market.",
    marketInsight:
      "Hyderabad's growth in pharma, IT, and real estate has intensified digital competition. Companies need strong local and national SEO strategies to capture Hyderabad's expanding consumer market.",
    industries: ["Pharma & Biotech", "IT Services", "Real Estate", "Food & Hospitality", "Retail"],
    landmarks: ["HITEC City", "Banjara Hills", "Jubilee Hills", "Gachibowli", "Secunderabad"],
  },
  {
    city: "Chennai",
    slug: "chennai",
    state: "Tamil Nadu",
    population: "11 million",
    description:
      "South India's leading metropolitan city and a major hub for automobile manufacturing, IT services, and healthcare. Chennai has one of India's most educated and digitally active consumer populations.",
    marketInsight:
      "Chennai's competitive digital landscape demands precise local SEO targeting and strong content strategies, particularly for automotive, healthcare, and IT services sectors.",
    industries: ["Automotive", "IT & BPO", "Healthcare", "Manufacturing", "Education"],
    landmarks: ["Anna Nagar", "T. Nagar", "Velachery", "OMR", "Mount Road"],
  },
  {
    city: "Pune",
    slug: "pune",
    state: "Maharashtra",
    population: "7 million",
    description:
      "Maharashtra's second-largest city, known as the Oxford of the East for its prestigious universities. Pune is a major IT and automobile hub with a young, educated population driving digital commerce.",
    marketInsight:
      "Pune's large student and young professional population is highly active online. Businesses in EdTech, IT, real estate, and F&B sectors benefit greatly from targeted digital marketing strategies.",
    industries: ["IT & Software", "Education", "Automobile", "Real Estate", "F&B"],
    landmarks: ["Koregaon Park", "Hinjewadi", "Baner", "Kharadi", "Shivajinagar"],
  },
  {
    city: "Kolkata",
    slug: "kolkata",
    state: "West Bengal",
    population: "15 million",
    description:
      "India's cultural capital and gateway to Eastern India. Kolkata's diverse economy spans trade, manufacturing, IT, and a burgeoning startup scene, with a growing appetite for digital services.",
    marketInsight:
      "Kolkata's businesses are increasingly shifting online, creating significant opportunity for first movers in SEO. The city's retail, education, and healthcare sectors are particularly competitive.",
    industries: ["Trade & Commerce", "Education", "IT", "Healthcare", "Manufacturing"],
    landmarks: ["Park Street", "Salt Lake", "New Town Rajarhat", "Dalhousie", "Esplanade"],
  },
  {
    city: "Ahmedabad",
    slug: "ahmedabad",
    state: "Gujarat",
    population: "8 million",
    description:
      "Gujarat's largest city and one of India's fastest-growing business hubs. Ahmedabad is known for its entrepreneurial culture, thriving textile and chemical industries, and rapidly expanding startup ecosystem.",
    marketInsight:
      "Ahmedabad's business community is highly entrepreneurial and ROI-focused. SEO and PPC services that demonstrate clear returns resonate strongly with the city's commercially minded businesses.",
    industries: ["Textile & Apparel", "Chemicals", "Real Estate", "FMCG", "IT & Startup"],
    landmarks: ["SG Highway", "Prahlad Nagar", "Navrangpura", "Vastrapur", "GIFT City"],
  },
  {
    city: "Jaipur",
    slug: "jaipur",
    state: "Rajasthan",
    population: "4 million",
    description:
      "The Pink City and Rajasthan's capital is a major tourism destination and growing centre for jewellery, handicrafts, IT, and real estate. Jaipur's rich cultural heritage drives significant tourism and hospitality business.",
    marketInsight:
      "Tourism, hospitality, jewellery, and real estate dominate Jaipur's digital marketing landscape. Local SEO is critical for reaching both domestic and international visitors searching online.",
    industries: ["Tourism & Hospitality", "Jewellery", "Real Estate", "IT", "Education"],
    landmarks: ["MI Road", "Vaishali Nagar", "Malviya Nagar", "Mansarovar", "C-Scheme"],
  },
  {
    city: "Surat",
    slug: "surat",
    state: "Gujarat",
    population: "7 million",
    description:
      "India's diamond and textile capital, processing 90% of the world's rough diamonds. Surat is one of India's fastest-growing cities and a major hub for B2B trade, logistics, and manufacturing.",
    marketInsight:
      "Surat's globally connected textile and diamond industries increasingly require digital presence for B2B and B2C marketing. Export-oriented businesses need strong SEO for international reach.",
    industries: ["Diamond & Jewellery", "Textile", "Logistics", "Real Estate", "Chemical"],
    landmarks: ["Ring Road", "Vesu", "Adajan", "Dumas Road", "Katargam"],
  },
  {
    city: "Chandigarh",
    slug: "chandigarh",
    state: "Punjab & Haryana",
    population: "1.2 million",
    description:
      "India's best-planned city and the capital of both Punjab and Haryana. Chandigarh serves as the commercial hub for the entire northern region, with a high-income population and strong digital adoption.",
    marketInsight:
      "Chandigarh's well-educated, high-income population is highly active online. Healthcare, real estate, education, and hospitality businesses benefit most from digital marketing investment here.",
    industries: ["Healthcare", "Education", "Real Estate", "IT", "Hospitality"],
    landmarks: ["Sector 17", "Sector 35", "IT Park", "Elante Mall Area", "Panchkula"],
  },
  {
    city: "Kochi",
    slug: "kochi",
    state: "Kerala",
    population: "3 million",
    description:
      "Kerala's commercial capital and one of India's fastest-growing smart cities. Kochi is a major hub for IT, tourism, shipping, and trade, with a reputation for high digital literacy.",
    marketInsight:
      "Kochi's tech-forward population and booming tourism industry create excellent opportunities for businesses investing in local SEO and content marketing strategies.",
    industries: ["IT & ITeS", "Tourism & Hospitality", "Shipping & Logistics", "Trade", "Real Estate"],
    landmarks: ["Kakkanad", "Marine Drive", "Edappally", "MG Road", "Infopark"],
  },
  {
    city: "Indore",
    slug: "indore",
    state: "Madhya Pradesh",
    population: "3.5 million",
    description:
      "Madhya Pradesh's largest city and India's cleanest city for eight consecutive years. Indore is a growing IT and industrial hub with a rapidly expanding startup and digital services sector.",
    marketInsight:
      "Indore's growing IT sector and retail market present significant SEO opportunities. Businesses here benefit from early digital marketing investment given the relatively low competition.",
    industries: ["IT & Software", "Manufacturing", "Education", "Retail", "Healthcare"],
    landmarks: ["Vijay Nagar", "AB Road", "MR-10", "Sapna Sangeeta", "Bhawarkuan"],
  },
  {
    city: "Nagpur",
    slug: "nagpur",
    state: "Maharashtra",
    population: "3 million",
    description:
      "Maharashtra's winter capital and a major logistics and orange-growing hub at the geographic centre of India. Nagpur is seeing rapid growth in IT, real estate, and education sectors.",
    marketInsight:
      "Nagpur's strategic location makes it important for logistics and trade businesses. Growing IT parks and real estate development are creating new demand for digital marketing services.",
    industries: ["Logistics", "IT", "Real Estate", "Education", "Healthcare"],
    landmarks: ["Dharampeth", "Sitabuldi", "Wardha Road", "Manish Nagar", "MIHAN"],
  },
  {
    city: "Gurgaon",
    slug: "gurgaon",
    state: "Haryana",
    population: "1.5 million",
    description:
      "Delhi's corporate twin and home to the headquarters of hundreds of multinational companies, financial institutions, and technology giants. Gurgaon represents India's most competitive digital marketing battleground.",
    marketInsight:
      "Gurgaon's high concentration of MNCs, startups, and luxury real estate means an intensely competitive digital landscape—where only the most sophisticated SEO and content strategies win.",
    industries: ["Corporate & MNC", "Real Estate", "Finance", "IT", "Retail & Luxury"],
    landmarks: ["Cyber City", "Golf Course Road", "MG Road", "Sector 29", "Udyog Vihar"],
  },
  {
    city: "Noida",
    slug: "noida",
    state: "Uttar Pradesh",
    population: "0.8 million",
    description:
      "Part of the Delhi NCR and a major IT and media hub. Noida houses hundreds of IT companies, media companies, and BPO operations, along with rapidly growing retail and real estate sectors.",
    marketInsight:
      "Noida's IT and media ecosystem drives high digital marketing demand. Businesses in tech, real estate, and e-commerce benefit most from SEO investment in this market.",
    industries: ["IT & Software", "Media & Publishing", "Real Estate", "Education", "E-Commerce"],
    landmarks: ["Sector 18", "Film City", "Sector 62", "Expressway", "Greater Noida"],
  },
  {
    city: "Coimbatore",
    slug: "coimbatore",
    state: "Tamil Nadu",
    population: "2.2 million",
    description:
      "Tamil Nadu's second-largest city and the Manchester of South India for its textile and engineering industries. Coimbatore is rapidly growing as a hub for manufacturing, IT, and healthcare.",
    marketInsight:
      "Coimbatore's industrial base and growing IT sector represent significant untapped digital marketing opportunity. Healthcare and education sectors are particularly competitive online.",
    industries: ["Textile & Engineering", "IT", "Healthcare", "Education", "Retail"],
    landmarks: ["Gandhipuram", "RS Puram", "Peelamedu", "Tidel Park", "Saibaba Colony"],
  },
  {
    city: "Vadodara",
    slug: "vadodara",
    state: "Gujarat",
    population: "2.2 million",
    description:
      "Gujarat's cultural capital, known for its world-class engineering colleges and major chemical, pharmaceutical, and manufacturing industries. Vadodara is a growing hub for IT and defence manufacturing.",
    marketInsight:
      "Vadodara's industrial mix of chemicals, engineering, and IT presents diverse digital marketing opportunities. B2B industrial companies here are increasingly investing in SEO-driven lead generation.",
    industries: ["Chemical & Petro", "Engineering", "IT", "Education", "Defence"],
    landmarks: ["Alkapuri", "Akota", "Manjalpur", "Vadsar", "Makarpura GIDC"],
  },
  {
    city: "Bhopal",
    slug: "bhopal",
    state: "Madhya Pradesh",
    population: "2.5 million",
    description:
      "Madhya Pradesh's capital city and a rapidly growing administrative and industrial hub. Bhopal is investing heavily in IT infrastructure, education, and smart city initiatives.",
    marketInsight:
      "Bhopal's government and education sectors dominate, but a growing private sector creates demand for digital marketing—particularly in real estate, healthcare, and retail.",
    industries: ["Government & Public Sector", "Education", "Real Estate", "Healthcare", "IT"],
    landmarks: ["MP Nagar", "Arera Colony", "Kolar Road", "TT Nagar", "Hoshangabad Road"],
  },
  {
    city: "Lucknow",
    slug: "lucknow",
    state: "Uttar Pradesh",
    population: "3.8 million",
    description:
      "Uttar Pradesh's capital and the City of Nawabs—a major centre for government, healthcare, education, and a rapidly growing IT sector. Lucknow is one of India's fastest-growing tier-2 cities.",
    marketInsight:
      "Lucknow's digital market is growing rapidly with increasing internet penetration. Real estate, healthcare, education, and retail businesses are investing heavily in online visibility.",
    industries: ["Government", "Healthcare", "Education", "Real Estate", "IT & BPO"],
    landmarks: ["Gomti Nagar", "Hazratganj", "Alambagh", "Aliganj", "Vibhuti Khand"],
  },
  {
    city: "Patna",
    slug: "patna",
    state: "Bihar",
    population: "2.5 million",
    description:
      "Bihar's capital and a rapidly digitising commercial centre. Patna serves as the gateway to Bihar's economy, with strong sectors in education, healthcare, retail, and government services.",
    marketInsight:
      "Patna represents a high-growth digital market with low competition. Early investment in SEO here can deliver dominant rankings that last for years.",
    industries: ["Education", "Healthcare", "Government", "Retail", "Agriculture Trade"],
    landmarks: ["Boring Road", "Bailey Road", "Fraser Road", "Kankarbagh", "Patna Sahib"],
  },
  {
    city: "Visakhapatnam",
    slug: "visakhapatnam",
    state: "Andhra Pradesh",
    population: "2.3 million",
    description:
      "Andhra Pradesh's largest city and a major port, industrial, and tourism destination. Vizag is seeing rapid growth in IT, pharma, steel, and tourism sectors.",
    marketInsight:
      "Visakhapatnam's emerging IT corridor and booming tourism scene create strong digital marketing demand. Port-related industries and pharma companies are increasing their online investment.",
    industries: ["IT & BPO", "Pharma", "Steel & Industry", "Tourism", "Port & Logistics"],
    landmarks: ["Beach Road", "Dwaraka Nagar", "Gajuwaka", "MVP Colony", "Steel Plant Area"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
