import { ICONS_NAMES } from '../components/dynamic-icon/icons';

export const WORKS = [
   {
      title: 'Desarrollador Full Stack',
      company: 'Dwit México',
      date: 'Mayo 2025 - Actual',
      description: [
         'Desarrollo aplicaciones y páginas web con Next.js, seleccionando esta tecnología según las necesidades del proyecto para garantizar soluciones escalables y de alto rendimiento, pero identifiqué una oportunidad de mejora en la gestión de infraestructura, que carecía de estandarización y generaba costos operativos elevados.',
         'Propuse y lideré la consolidación de múltiples servicios de hosting dispersos en un único VPS, logrando una reducción de costos operativos de aproximadamente un 50%, optimizando la administración con configuraciones mínimas y automatizadas.',
         'Diseñé e implementé una arquitectura basada en Docker Swarm y Caddy Server para hospedar proyectos, eliminando la necesidad de compilaciones locales y configuraciones manuales de servidores web.',
         'Configuración de escalado automático de servicios en Docker Swarm, garantizando un rendimiento estable bajo alta carga de usuarios, y utilicé un plugin de Caddy para automatizar la configuración de reglas de proxy inverso.',
         'Automaticé la configuración del servidor VPS mediante Ansible, asegurando una recuperación rápida y consistente en caso de fallos, mejorando la resiliencia y mantenibilidad de la infraestructura.',
      ],
      stack: [
         ICONS_NAMES.TypeScript,
         ICONS_NAMES.NextJS,
         ICONS_NAMES.TailwindCSS,
         ICONS_NAMES.Docker,
         ICONS_NAMES.GH_Actions,
         ICONS_NAMES.PostgreSQL,
      ],
   },
   {
      title: 'Desarrollador Backend',
      company: 'Capital 28',
      date: 'Octubre 2023 - Mayo 2025',
      description: [
         'Lideré la migración de un sistema CRM de una arquitectura monolítica a microservicios, diseñando y desarrollando íntegramente el backend para mejorar el rendimiento, la escalabilidad y la mantenibilidad del sistema.',
         'Implementé un sistema de autenticación con Firebase y autorización basada en ABAC utilizando Cerbos, habilitando una gestión granular de permisos y la creación dinámica de roles personalizados.',
         'Automatizé la configuración de servidores con Ansible y estandaricé entornos mediante Docker, asegurando consistencia y estabilidad en desarrollo y producción.',
         'Configuré Caddy como API Gateway con reglas dinámicas de reverse proxy para optimizar la comunicación entre microservicios, y utilicé Docker Swarm para la orquestación de contenedores.',
         'Diseñé pipelines de CI/CD con GitHub Actions para automatizar despliegues, integrando un plugin de Caddy para configurar dinámicamente reglas de proxy inverso en los archivos de despliegue.',
      ],
      stack: [
         ICONS_NAMES.TypeScript,
         ICONS_NAMES.NestJS,
         ICONS_NAMES.MongoDB,
         ICONS_NAMES.Firebase,
         ICONS_NAMES.Cerbos,
         ICONS_NAMES.Docker,
         ICONS_NAMES.GH_Actions,
         ICONS_NAMES.Ansible,
      ],
   },
   {
      title: 'Desarrollador Full Stack - Internship',
      company: 'Wizeline',
      date: 'Septiembre 2022 - Septiembre 2023  Remoto',
      description: [
         'Participé en el desarrollo de un proyecto interno enfocado en el bienestar de los empleados, diseñado para celebrar los esfuerzos y logros del equipo. Aprendí y apliqué la metodología SCRUM de manera efectiva, mejorando significativamente mis habilidades de comunicación y colaboración en equipo.',
         'Mejoré mis habilidades de programación y resolución de problemas complejos. Observé y participé en los despliegues realizados con en AWS, lo cual despertó mi interés por la infraestructura, AWS y herramientas de IaC, como terraform',
         'Realice la actualización todas las dependencias del proyecto, tanto del backend como del frontend, migrando de Node.js 12 a Node.js 18 en la API y de Node.js 14 a Node.js 18 en el frontend, lo que optimizó significativamente el rendimiento de la API.',
      ],
      stack: [
         ICONS_NAMES.TypeScript,
         ICONS_NAMES.React,
         ICONS_NAMES.NodeJS,
         ICONS_NAMES.Sequelize,
         ICONS_NAMES.PostgreSQL,
         ICONS_NAMES.Docker,
         ICONS_NAMES.AWS,
      ],
   },
];
