export interface Developer {
  id: string;
  name: string;
  description: string;
  projectCount: number;
  established: number;
  headquarters: string;
  notableProjects: string[];
}

export const developers: Developer[] = [
  {
    id: "emaar",
    name: "Emaar Properties",
    description:
      "Emaar Properties is Dubai's largest publicly listed developer and the force behind some of the world's most recognisable landmarks, including the Burj Khalifa and The Dubai Mall. Since 1997, the company has delivered master-planned communities and iconic mixed-use developments that have defined the city's modern skyline.",
    projectCount: 60,
    established: 1997,
    headquarters: "Dubai, UAE",
    notableProjects: ["Burj Khalifa", "Dubai Mall", "Dubai Hills Estate", "Emaar Beachfront", "Downtown Dubai"],
  },
  {
    id: "damac",
    name: "DAMAC Properties",
    description:
      "DAMAC Properties is one of the Middle East's leading luxury real estate developers, known for bold design collaborations with global fashion and lifestyle brands such as Versace, Cavalli, and de Grisogono. Established in 2002, DAMAC has delivered premium residential, commercial, and leisure properties across the UAE and internationally.",
    projectCount: 40,
    established: 2002,
    headquarters: "Dubai, UAE",
    notableProjects: ["DAMAC Hills", "Cavalli Tower", "DAMAC Lagoons", "Paramount Tower Hotel & Residences", "Aykon City"],
  },
  {
    id: "nakheel",
    name: "Nakheel",
    description:
      "Nakheel is a Dubai government-owned master developer best known for creating the Palm Jumeirah, one of the most ambitious engineering projects in history. Since 2000, Nakheel has transformed Dubai's coastline and communities through large-scale waterfront and mixed-use developments.",
    projectCount: 30,
    established: 2000,
    headquarters: "Dubai, UAE",
    notableProjects: ["Palm Jumeirah", "Ibn Battuta Mall", "Deira Islands", "Jumeirah Village Circle", "The World Islands"],
  },
  {
    id: "sobha",
    name: "Sobha Realty",
    description:
      "Sobha Realty is renowned for its backward-integrated development model, controlling every stage of construction from raw materials to finishing — a rarity in the industry that underpins its reputation for superior build quality. Founded in 1976 and entering the UAE market in 2003, the company has built a loyal following among discerning buyers who prioritise craftsmanship.",
    projectCount: 20,
    established: 1976,
    headquarters: "Dubai, UAE",
    notableProjects: ["Sobha Hartland", "Sobha Creek Vistas", "Sobha Seahaven", "Sobha Reserve", "Forest Villas"],
  },
  {
    id: "meraas",
    name: "Meraas",
    description:
      "Meraas is a Dubai-based developer with a distinctive focus on creating lifestyle-driven destinations that blend retail, hospitality, entertainment, and residences into cohesive urban experiences. Established in 2007, its portfolio includes some of Dubai's most beloved social and cultural landmarks.",
    projectCount: 15,
    established: 2007,
    headquarters: "Dubai, UAE",
    notableProjects: ["City Walk", "Bluewaters Island", "La Mer", "Port de La Mer", "Ain Dubai"],
  },
];
