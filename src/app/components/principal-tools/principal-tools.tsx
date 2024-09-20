import Ansible from "../ui/icons/ansible";
import AmazonWebServices from "../ui/icons/aws";
import Docker from "../ui/icons/docker";
import GhActions from "../ui/icons/ghActions";
import Linux from "../ui/icons/linux";
import NestJS from "../ui/icons/nestjs";
import Nextjs from "../ui/icons/nextJS";
import Nodejs from "../ui/icons/nodeJS";
import React from "../ui/icons/react";
import Terraform from "../ui/icons/terraform";

export default function PrincipalTools() {
  return (
    <section className="pt-10 sm:pt-0">
      <h2 className="text-4xl font-semibold text-sky-300">
        Herramientas y tecnologías favoritas
      </h2>
      <div className="flex flex-wrap gap-6 py-10 justify-between sm:justify-start">
        <Nodejs className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <NestJS className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <Nextjs className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <React className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <Docker className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <Linux className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <AmazonWebServices className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <Ansible className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <Terraform className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
        <GhActions className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
      </div>
    </section>
  );
}
