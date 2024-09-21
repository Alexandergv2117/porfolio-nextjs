import { PROJECTS } from "@/app/constants/projects";
import Card from "../ui/card";
import DynamicIcon from "../dynamic-icon/dynamic-icon";

export default function Projects() {
  return (
    <section className="mt-10 space-y-10" id="projects">
      <h2 className="text-4xl font-semibold text-sky-300">Proyectos</h2>
      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <Card key={index} className="gap-2">
            <header>
              <h3 className="text-2xl font-semibold text-amber-400">
                {project.title}
              </h3>
              <span className="flex flex-col sm:flex-row sm:space-x-4">
                {project.company && (
                  <span className="text-stone-400">{project.company}</span>
                )}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-400 hover:text-amber-400"
                  >
                    Ver proyecto
                  </a>
                )}
              </span>
            </header>
            <section className="space-y-3 py-6">
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg"
                />
              )}
              {project.description && (
                <div>
                  {project.description.map((paragraph, index) => (
                    <p
                      key={index + paragraph}
                      className="text-[#cdcdcd] text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </section>
            <footer className="flex flex-wrap gap-4">
              {project.stack.map((tech, index) => (
                <DynamicIcon
                  key={index + tech}
                  label={tech}
                  className="w-[3rem] h-[3rem] sm:w-[3rem] sm:h-[3rem] bg-white/5 p-2 rounded-lg"
                />
              ))}
            </footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
