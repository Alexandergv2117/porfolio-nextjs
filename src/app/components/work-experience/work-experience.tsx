import Card from "../ui/card";
import { WORKS } from "@/app/constants/works";
import DynamicIcon from "../dynamic-icon/dynamic-icon";

export default function WorkExperience() {
  return (
    <section id="experiencie">
      <h2 className="text-4xl font-semibold text-sky-300">
        Experiencia laboral
      </h2>
      <div className="flex flex-col gap-6 mt-6">
        {WORKS.map((work, index) => (
          <Card key={index + work.title} className="gap-2">
            <header className="space-y-2">
              <h3 className="text-3xl font-semibold text-amber-400">
                {work.title}
              </h3>
              <div className="flex flex-col sm:flex-row gap-1 text-stone-400">
                <p>{work.company}</p>
                <p className="hidden sm:flex">|</p>
                <p>{work.date}</p>
              </div>
            </header>
            <section className="space-y-3 py-6 sm:text-lg font-light">
              {work.description.map((paragraph: string, index) => (
                <p key={index + paragraph} className="text-[#cdcdcd]">
                  {paragraph}
                </p>
              ))}
            </section>
            <footer className="flex flex-wrap gap-4">
              {work.stack.map((tech, index) => (
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
