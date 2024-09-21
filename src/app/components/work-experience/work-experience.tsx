import Card from "../ui/card";
import { WORKS } from "@/app/constants/works";
import Tag from "../ui/tags";

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-sky-300">
        Experiencia laboral
      </h2>
      <div className="flex flex-col gap-6 mt-6">
        {WORKS.map((work, index) => (
          <Card key={index + work.title} className="gap-4">
            <h3 className="text-3xl font-semibold text-amber-400">
              {work.title}
            </h3>
            <div className="flex flex-col sm:flex-row gap-1 text-xl text-stone-400">
              <p>{work.company}</p>
              <p className="hidden sm:flex">|</p>
              <p>{work.date}</p>
            </div>
            <section className="space-y-3 py-6">
              {work.description.map((paragraph, index) => (
                <p key={index + paragraph} className="text-[#cdcdcd] text-lg">
                  {paragraph}
                </p>
              ))}
            </section>
            <footer className="flex flex-wrap gap-2">
              {work.stack.map((tech, index) => (
                <Tag key={index + tech}>{tech}</Tag>
              ))}
            </footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
