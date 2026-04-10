import { ICONS_NAMES } from '../components/dynamic-icon/icons';

type Tags = 'side project' | 'landing page' | 'open source' | 'work project';

export interface ProjectMeta {
   href?: string;
   company?: string;
   tags?: Tags[];
   image?: string;
   stack: string[];
}

export const PROJECTS: ProjectMeta[] = [
   {
      company: 'The Epoch Times México',
      href: 'https://elepoch.com/',
      tags: ['work project'],
      image: '/elepoch.png',
      stack: [
         ICONS_NAMES.TypeScript,
         ICONS_NAMES.NextJS,
         ICONS_NAMES.TailwindCSS,
         ICONS_NAMES.GH_Actions,
         ICONS_NAMES.Docker,
      ],
   },
   {
      company: 'The Epoch Times México',
      tags: ['landing page', 'work project'],
      image: '/elecciones2024USA.webp',
      stack: [
         ICONS_NAMES.TypeScript,
         ICONS_NAMES.NextJS,
         ICONS_NAMES.TailwindCSS,
         ICONS_NAMES.GH_Actions,
         ICONS_NAMES.Docker,
      ],
   },
];
