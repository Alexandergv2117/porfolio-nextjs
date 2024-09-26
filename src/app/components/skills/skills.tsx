import Card from "../ui/card";
import DynamicIcon from "../dynamic-icon/dynamic-icon";
import { SKILLS } from "@/app/constants/skills";

export default function Skills() {
  return (
    <section id="skills" className="mt-8">
      <h2 className="text-4xl font-semibold text-sky-300">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-between mt-6 gap-6 sm:gap-0">
        {SKILLS.map((skill, index) => (
          <Card key={index} className="w-full sm:w-auto sm:p-8">
            <header className="space-y-2">
              <h3 className="text-2xl font-semibold text-amber-400 text-center">
                {skill.name}
              </h3>
            </header>
            <section className="space-y-3 py-6">
              <div className="grid grid-cols-4 gap-4">
                {skill.stack.map((tech, index) => (
                  <DynamicIcon
                    key={index + tech}
                    label={tech}
                    className="w-[3rem] h-[3rem] sm:w-[3rem] sm:h-[3rem] bg-white/5 p-2 rounded-lg"
                  />
                ))}
              </div>
            </section>
          </Card>
        ))}
      </div>
    </section>
  );
}
