import PrincipalTools from "./components/principal-tools/principal-tools";
import Profile from "./components/profile/profile";
import WorkExperience from "./components/work-experience/work-experience";

export default function Home() {
  return (
    <main className="w-full mt-28 sm:mt-36 gap-10">
      <section className="w-full space-y-6 sm:space-y-20 mb-10">
        <Profile />
        <div className="w-full flex flex-col space-y-4">
          <h1 className="font-bold text-5xl sm:text-7xl gradient-text-random">
            Desarrollador de Software
          </h1>
          <p className="text-balance text-[#cdcdcd] font-light sm:text-lg description-experience">
            Desarrollador de software con más de dos años de experiencia,
            especializado en backend utilizando <span>Nodejs</span> y{" "}
            <span>Nestjs</span>. Gestión de infraestructura en <span>AWS</span>{" "}
            utilizando <span>Terraform</span>, así como en la configuración de
            servidores con <span>Ansible</span>. Aplicaciones desplegadas de
            manera eficiente utilizando <span>Caddy server</span> y{" "}
            <span>Docker Swarm</span>, Implementación de pipelines para{" "}
            <span>CI/CD</span> con <span>GitHub Actions</span> para asegurar
            procesos de integración y entrega continuos. Aunque mi enfoque
            principal es el backend, también tengo experiencia en frontend con{" "}
            <span>React</span> y <span>Nextjs</span>, lo que me permite
            colaborar en diversas áreas del desarrollo de software.
          </p>
        </div>
        <PrincipalTools />
      </section>
      <WorkExperience />
    </main>
  );
}
