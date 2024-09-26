import { ICONS_NAMES } from "../components/dynamic-icon/icons";

type Tags = "side project" | "landing page" | "open source" | "work project";

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
    title: "Elecciones USA 2024",
    company: "The Epoch Times México",
    href: "https://elecciones2024usa.theepochtimes.com/",
    tags: ["landing page", "work project"],
    description: [
      "Desarrollo de Landing Page para la Cobertura Especial de las Elecciones Presidenciales de USA 2024 - The Epoch Times México.",
      "Codifiqué una landing page para la cobertura especial de las elecciones presidenciales de USA 2024, destinada a The Epoch Times México. Utilicé Next.js y TailwindCSS, implementando Static Site Generation (SSG) para optimizar el rendimiento y consumiendo datos de una API de WordPress. También configuré GitHub Actions para el despliegue automático, realizado con Docker Swarm y Caddy.",
    ],
    image: "/elecciones2024USA.webp",
    stack: [
      ICONS_NAMES.TypeScript,
      ICONS_NAMES.NextJS,
      ICONS_NAMES.TailwindCSS,
      ICONS_NAMES.GH_Actions,
      ICONS_NAMES.Docker,
    ],
  },
];
