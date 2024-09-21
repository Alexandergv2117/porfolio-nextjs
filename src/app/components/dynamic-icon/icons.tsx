import Ansible from "../ui/icons/ansible";
import AmazonWebServices from "../ui/icons/aws";
import Cerbos from "../ui/icons/cerbos";
import Docker from "../ui/icons/docker";
import Firebase from "../ui/icons/firebase";
import GhActions from "../ui/icons/ghActions";
import Github from "../ui/icons/github";
import Gmail from "../ui/icons/gmail";
import Grafana from "../ui/icons/grafana";
import Kubernetes from "../ui/icons/k8s";
import LinkedIn from "../ui/icons/linkedIn";
import Linux from "../ui/icons/linux";
import MongoDB from "../ui/icons/mongoDB";
import NestJS from "../ui/icons/nestjs";
import Nextjs from "../ui/icons/nextJS";
import Nodejs from "../ui/icons/nodeJS";
import PostgreSQL from "../ui/icons/postgreSQL";
import React from "../ui/icons/react";
import Sequelize from "../ui/icons/sequelize";
import Terraform from "../ui/icons/terraform";
import TypeScript from "../ui/icons/TypeScript";
import Vue from "../ui/icons/vue";

export const COMPONENTS_ICONS = {
  Ansible: Ansible,
  AWS: AmazonWebServices,
  Docker: Docker,
  "GitHub Actions": GhActions,
  Github: Github,
  Gmail: Gmail,
  Grafana: Grafana,
  Kubernetes: Kubernetes,
  LinkedIn: LinkedIn,
  Linux: Linux,
  MongoDB: MongoDB,
  NestJS: NestJS,
  "Next.js": Nextjs,
  "Node.js": Nodejs,
  PostgreSQL: PostgreSQL,
  React: React,
  Vue: Vue,
  Sequelize: Sequelize,
  Terraform: Terraform,
  TypeScript: TypeScript,
  Firebase: Firebase,
  Cerbos: Cerbos,
};

export const ICONS_NAMES = {
  Gmail: "Gmail",
  Ansible: "Ansible",
  AWS: "AWS",
  Docker: "Docker",
  GH_Actions: "GitHub Actions",
  Github: "Github",
  Grafana: "Grafana",
  Kubernetes: "Kubernetes",
  LinkedIn: "LinkedIn",
  Linux: "Linux",
  MongoDB: "MongoDB",
  NestJS: "NestJS",
  NextJS: "Next.js",
  NodeJS: "Node.js",
  PostgreSQL: "PostgreSQL",
  React: "React",
  Vue: "Vue",
  Sequelize: "Sequelize",
  Terraform: "Terraform",
  TypeScript: "TypeScript",
  Firebase: "Firebase",
  Cerbos: "Cerbos",
};


export type IconKeys = keyof typeof COMPONENTS_ICONS;
