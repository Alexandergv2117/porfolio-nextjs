import { useTranslations } from "next-intl";
import MyLink from "./link";
import LangSwitcher from "./lang-switcher";

export default function NavBar() {
  const t = useTranslations('navbar');
  return (
    <nav aria-label="Main navigation" className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-10/12 sm:w-auto">
      <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.10] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Nav links */}
        <div className="flex items-center gap-0.5">
          <MyLink href="/">
            {t('home')}
          </MyLink>
          <MyLink href="#experiencie">
            {t('workExperience')}
          </MyLink>
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* Language switcher */}
        <LangSwitcher />
      </div>
    </nav>
  );
}