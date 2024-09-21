import DynamicIcon from "../dynamic-icon/dynamic-icon";
import { ICONS_NAMES } from "../dynamic-icon/icons";

export default function PrincipalTools() {
  return (
    <section className="pt-10 sm:pt-0">
      <h2 className="text-4xl font-semibold text-sky-300">
        Herramientas y tecnologías favoritas
      </h2>
      <div className="flex flex-wrap gap-6 py-10 justify-between sm:justify-start">
        <DynamicIcon
          label={ICONS_NAMES.NodeJS}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.NestJS}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.NextJS}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.React}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.Docker}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.Linux}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.AWS}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.Ansible}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.Terraform}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
        <DynamicIcon
          label={ICONS_NAMES.GH_Actions}
          className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]"
        />
      </div>
    </section>
  );
}
