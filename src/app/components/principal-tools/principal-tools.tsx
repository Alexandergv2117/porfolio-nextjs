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
        <div className="flex flex-col justify-center items-center group">
          <Nodejs className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            Node.js
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <NestJS className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            NestJS
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <Nextjs className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            Next.js
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <React className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            React
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <Docker className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            Docker
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <Linux className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            Linux
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <AmazonWebServices className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            AWS
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <Ansible className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            Ansible
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <Terraform className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            Terraform
          </span>
        </div>
        <div className="flex flex-col justify-center items-center group">
          <GhActions className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] transition-transform duration-300 group-hover:scale-125" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            GitHub Actions
          </span>
        </div>
      </div>
    </section>
  );
}
