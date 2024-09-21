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
          <Card key={index + work.title} className="gap-2">
            <h3 className="text-2xl font-semibold">{work.title}</h3>
            <div className="flex gap-1">
              <p className="text-gray-400">{work.company}</p>
              <p className="text-gray-400">|</p>
              <p className="text-gray-400">{work.date}</p>
            </div>
            <p className="text-gray-400">{work.description}</p>
            <div className="flex flex-wrap gap-2">
              {work.stack.map((tech, index) => (
                <Tag key={index + tech}>
                  {tech}
                </Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
