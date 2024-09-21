import { ICONS_NAMES } from "../components/dynamic-icon/icons";

type Tags = "side-project" | "landing-page" | "open-source" | "work-project";

interface Project {
  title: string;
  href?: string;
  company?: string;
  tags?: Tags[];
  description: string[];
  image?: string;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Elecciones 2024 USA",
    company: "The Epoch Times México",
    href: "https://elecciones2024usa.theepochtimes.com/",
    tags: ["landing-page", "work-project"],
    description: [
      "Desarrolle una landing page para la cubertura especial de las elecciiones presidenciales de Estados Unidos de 2024 para The Epoch Times México.",
      "La página fue desarrollada con Next.js y TailwindCSS, consumiendo datos de una API de WordPress. Aplicando la estrategia de SSG para mejorar el rendimiento de la página.",
    ],
    image: "/elecciones2024USA.webp",
    stack: [ICONS_NAMES.NextJS, ICONS_NAMES.TailwindCSS],
  },
];
