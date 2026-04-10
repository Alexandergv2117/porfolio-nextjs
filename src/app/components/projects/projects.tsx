import { useTranslations } from "next-intl";
import { PROJECTS } from "@/app/constants/projects";
import ProjectCarousel from "./project-carousel";

export default function Projects() {
  const t = useTranslations('projects');

  const items = PROJECTS.map((meta, index) => ({
    meta,
    title: t(`project${index}.title`),
    descriptions: t.raw(`project${index}.descriptions`) as string[],
    seeProject: t('seeProject'),
  }));

  return (
    <section className="mt-10 space-y-6" id="projects">
      <h2 className="text-4xl font-semibold text-sky-300">{t('name')}</h2>
      <ProjectCarousel items={items} />
    </section>
  );
}
