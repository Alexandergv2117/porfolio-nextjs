import PrincipalTools from "./components/principal-tools/principal-tools";
import Profile from "./components/profile/profile";
import WorkExperience from "./components/work-experience/work-experience";

export default function Home() {
  return (
    <main className="w-full mt-28 sm:mt-36 gap-10">
      <section className="w-full space-y-8 sm:space-y-20 mb-8 sm:mb-16">
        <Profile />
        <div className="w-full flex flex-col gap-8 pt-8 sm:pt-0">
          <h1 className="font-bold text-5xl sm:text-7xl gradient-text-random">
            Desarrollador de Software
          </h1>
          <p className="text-balance text-[#cdcdcd] font-light sm:text-lg description-experience">
            Desarrollador de software con +2 años de experiencia,
            especializado en backend utilizando <span>Node.js</span> y{" "}
            <span>NestJS</span>. Gestión de infraestructura en <span>AWS</span>{" "}
            utilizando <span>Terraform</span>, configuración de
            servidores con <span>Ansible</span>. Aplicaciones desplegadas de
            manera eficiente utilizando <span>Caddy</span> y{" "}
            <span>Docker Swarm</span>, utilizando pipelines para el{" "}
            <span>CI/CD</span> con <span>GitHub Actions</span>. Aunque mi enfoque
            principal es el backend, también tengo experiencia en frontend con{" "}
            <span>React</span> y <span>Next.js</span>, lo que me permite
            colaborar en diversas áreas del desarrollo de software.
          </p>
        </div>
        <PrincipalTools />
      </section>
      <WorkExperience />
    </main>
  );
}
