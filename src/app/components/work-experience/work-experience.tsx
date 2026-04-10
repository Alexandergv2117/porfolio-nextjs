import { useTranslations } from 'next-intl';
import Card from "../ui/card";
import { WORKS } from "@/app/constants/works";
import DynamicIcon from "../dynamic-icon/dynamic-icon";

export default function WorkExperience() {
  const t = useTranslations('works');

  return (
    <section id="experiencie">
      <h2 className="text-4xl font-semibold text-sky-300">
        {t('heading')}
      </h2>
      <div className="flex flex-col gap-6 mt-6">
        {WORKS.map((work, index) => {
          const key = `work${index}`;
          const title = t(`${key}.title`);
          const date = t(`${key}.date`);
          const descriptions = t.raw(`${key}.descriptions`) as string[];

          return (
            <Card key={index + work.company} className="gap-2 sm:p-8">
              <header className="space-y-2">
                <h3 className="text-3xl font-semibold text-amber-400">
                  {title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-1 text-stone-400">
                  <p>{work.company}</p>
                  <p className="hidden sm:flex">|</p>
                  <p>{date}</p>
                </div>
              </header>
              <section className="space-y-3 py-6 sm:text-lg font-normal">
                {descriptions.map((paragraph, i) => (
                  <p key={i} className="text-[#cdcdcd]">
                    {paragraph}
                  </p>
                ))}
              </section>
              <footer className="flex flex-wrap gap-4">
                {work.stack.map((tech, i) => (
                  <DynamicIcon
                    key={i + tech}
                    label={tech}
                    className="w-[3rem] h-[3rem] bg-white/5 p-2 rounded-lg"
                  />
                ))}
              </footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
