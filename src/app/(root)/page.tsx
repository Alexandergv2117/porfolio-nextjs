import PrincipalTools from '../components/principal-tools/principal-tools';
import Profile from '../components/profile/profile';
import Projects from '../components/projects/projects';
// import Projects from "../components/projects/projects";
import Skills from '../components/skills/skills';
import WorkExperience from '../components/work-experience/work-experience';

export default function Home() {
   return (
      <main className="w-full mt-28 sm:mt-36 gap-10">
         <section className="w-full space-y-8 sm:space-y-20 mb-8 sm:mb-16">
            <Profile />
            <div className="w-full flex flex-col gap-8 pt-8 sm:pt-0 sm:pb-10">
               <h1 className="font-bold text-5xl sm:text-7xl gradient-text-random">
                  Ingeniero de Software
               </h1>
               {/* <div className="text-2xl flex items-center space-x-4">
                  <span className="font-bold text-[#38bdf8]">
                    Backend
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="font-bold text-[#1761b1]">
                    Frontend
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="font-bold text-[#facc15]">
                    DevOps
                  </span>
                </div> */}
               <p className="text-balance text-[#cdcdcd] font-normal sm:text-lg description-experience">
                  Desarrollador de software con más de dos años de experiencia,
                  especializado en backend con <span>Node.js</span> y <span>NestJS</span>.
                  He trabajado en proyectos complejos, mejorando la infraestructura y
                  creando soluciones escalables y bien organizadas. Tengo experiencia
                  usando <span>AWS</span> con <span>Terraform</span> para gestionar
                  recursos, <span>Ansible</span> para configurar servidores, y{' '}
                  <span>Caddy</span> junto con <span>Docker Swarm</span> para desplegar
                  aplicaciones. También he creado pipelines con{' '}
                  <span>GitHub Actions</span> para automatizar el proceso de desarrollo y
                  despliegue. Aunque mi enfoque principal es el backend, también tengo
                  conocimientos de frontend con <span>React</span> y <span>Next.js</span>,
                  lo que me permite colaborar en distintas partes del desarrollo. Me gusta
                  aprender constantemente, mejorar lo que hago y aportar valor real a cada
                  proyecto.
               </p>
            </div>
            <PrincipalTools />
         </section>
         <WorkExperience />
         <Projects />
         <Skills />
      </main>
   );
}
