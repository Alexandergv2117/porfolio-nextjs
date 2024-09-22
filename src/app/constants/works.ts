import { ICONS_NAMES } from "../components/dynamic-icon/icons";

export const WORKS = [
  {
    title: "Desarrollador Backend",
    company: "Capital 28",
    date: "Octubre 2023 - Actual",
    description: [
      "Lideré el análisis y la migración de un sistema CRM desde una arquitectura monolítica hacia una arquitectura de microservicios, logrando una mejora significativa en rendimiento y escalabilidad. Implementé un sistema de autenticación con Firebase y autorización con Cerbos, utilizando el modelo ABAC (Attribute-Based Access Control), lo que permitió una gestión granular de permisos a nivel de usuario y la creación flexible de roles.",
      "Se utilizó Ansible para la configuración de los servidores, utilización de Docker para mantener el entorno de desarrollo más estable. Implementación de Caddy como API Gateway, aplicando las reglas de reverse proxy, para cominucar los microservicios.",
      "Implemente pipelines de CI/CD con GitHub Actions, para realizar los despliegues, utilizando Docker Swarm para la orquestación de contenedores, implementación del plugin de Caddy para la configuración de las reglas del proxy inverso de manera dinámica en los archivos de deployment de cada servicio.",
      "Configuración del sistema para la visualización de logs utilzando loki y grafana.",
    ],
    stack: [
      ICONS_NAMES.NestJS,
      ICONS_NAMES.Vue,
      ICONS_NAMES.MongoDB,
      ICONS_NAMES.Firebase,
      ICONS_NAMES.Cerbos,
      ICONS_NAMES.Docker,
      ICONS_NAMES.GH_Actions,
      ICONS_NAMES.Ansible,
      ICONS_NAMES.Grafana,
    ],
  },
  {
    title: "Desarrollador full stack - internship",
    company: "Wizeline",
    date: "Septiembre 2022 - Septiembre 2023  Remoto",
    description: [
      "Participé en el desarrollo de un proyecto interno enfocado en el bienestar de los empleados, diseñado para celebrar los esfuerzos y logros del equipo. Aprendí y apliqué la metodología SCRUM de manera efectiva, mejorando significativamente mis habilidades de comunicación y colaboración en equipo.",
      "Mejoré mis habilidades de programación y resolución de problemas complejos. Observé y participé en los despliegues realizados con en AWS, lo cual despertó mi interés por la infraestructura, AWS y herramientas de IaC, como terraform",
      "Realice la actualización todas las dependencias del proyecto, tanto del backend como del frontend, migrando de Node.js 12 a Node.js 18 en la API y de Node.js 14 a Node.js 18 en el frontend, lo que optimizó significativamente el rendimiento de la API.",
    ],
    stack: [
      ICONS_NAMES.React,
      ICONS_NAMES.NodeJS,
      ICONS_NAMES.Sequelize,
      ICONS_NAMES.PostgreSQL,
      ICONS_NAMES.Docker,
      ICONS_NAMES.AWS,
    ],
  },
];
