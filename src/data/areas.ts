export interface Area {
  id: string;
  name: string;
  description: string;
  avgPricePerSqft: number;
  avgRentalYield: number;
  propertyCount: number;
  image: string;
  highlights: string[];
}

export const areas: Area[] = [
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    description:
      "Dubai Marina is a vibrant waterfront community built along an artificial canal stretching 3km through the heart of new Dubai. It offers a walkable lifestyle with a mix of residential towers, dining, retail, and tram connectivity making it one of the most sought-after urban neighbourhoods.",
    avgPricePerSqft: 2188,
    avgRentalYield: 6.2,
    propertyCount: 1240,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    highlights: [
      "Waterfront canal and marina living",
      "Walkable promenade with dining and retail",
      "Dubai Tram and Metro connectivity",
      "High rental demand and liquidity",
    ],
  },
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    description:
      "Downtown Dubai is the city's iconic commercial and cultural epicentre, home to the world's tallest building, the Burj Khalifa, and the Dubai Mall. It commands a premium address that attracts both high-net-worth residents and tourists, ensuring strong capital values.",
    avgPricePerSqft: 2893,
    avgRentalYield: 5.5,
    propertyCount: 980,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    highlights: [
      "Burj Khalifa and Dubai Fountain views",
      "Steps from Dubai Mall",
      "Iconic global address",
      "Strong long-term capital appreciation",
    ],
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    description:
      "Palm Jumeirah is the world-famous man-made island shaped like a palm tree, offering exclusive beachfront living with private beach access and panoramic Arabian Gulf views. It represents the pinnacle of luxury real estate in Dubai and attracts ultra-high-net-worth buyers globally.",
    avgPricePerSqft: 3745,
    avgRentalYield: 5.0,
    propertyCount: 620,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    highlights: [
      "Private beachfront access",
      "World-renowned exclusive address",
      "Luxury villas and signature residences",
      "Strong short-term rental performance",
    ],
  },
  {
    id: "jbr",
    name: "Jumeirah Beach Residence (JBR)",
    description:
      "JBR is one of Dubai's most popular beachfront destinations, combining residential living with The Walk — a bustling open-air retail and dining strip along the Arabian Gulf. Its proximity to the beach and high tourist footfall drive exceptional rental yields for investors.",
    avgPricePerSqft: 2400,
    avgRentalYield: 6.8,
    propertyCount: 870,
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    highlights: [
      "Direct beach access on the Arabian Gulf",
      "The Walk retail and dining strip",
      "High tourism and short-term rental demand",
      "Vibrant, walkable community",
    ],
  },
  {
    id: "business-bay",
    name: "Business Bay",
    description:
      "Business Bay is Dubai's fast-growing central business district situated along the Dubai Water Canal, offering a blend of commercial and residential towers with competitive pricing relative to its Downtown neighbour. Its strategic location and ongoing infrastructure investment make it a top pick for yield-focused investors.",
    avgPricePerSqft: 2515,
    avgRentalYield: 7.2,
    propertyCount: 1100,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    highlights: [
      "Dubai Water Canal views",
      "Highest rental yields in central Dubai",
      "Close proximity to Downtown Dubai",
      "Rapidly growing business and lifestyle hub",
    ],
  },
  {
    id: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    description:
      "Dubai Hills Estate is a master-planned community centred around an 18-hole championship golf course, offering spacious villas and apartments surrounded by parks and green open spaces. It is the preferred choice for families seeking a suburban lifestyle with easy access to the city.",
    avgPricePerSqft: 1373,
    avgRentalYield: 5.8,
    propertyCount: 760,
    image: "https://images.unsplash.com/photo-1564013799919-ab6e14aa72d1?w=800&q=80",
    highlights: [
      "18-hole championship golf course",
      "Family-friendly with parks and green spaces",
      "Dubai Hills Mall on doorstep",
      "Accessible price point with strong growth trajectory",
    ],
  },
];
