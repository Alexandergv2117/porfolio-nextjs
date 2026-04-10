'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={() => switchLocale('es')}
        aria-label="Cambiar a español"
        aria-pressed={locale === 'es'}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
          locale === 'es'
            ? 'bg-white/15 text-white'
            : 'text-white/40 hover:text-white/70 hover:bg-white/8'
        }`}
      >
        <span aria-hidden="true">🇲🇽</span>
        <span className="font-mono tracking-wider">ES</span>
      </button>
      <span aria-hidden="true" className="text-white/15 select-none text-xs">·</span>
      <button
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
        aria-pressed={locale === 'en'}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
          locale === 'en'
            ? 'bg-white/15 text-white'
            : 'text-white/40 hover:text-white/70 hover:bg-white/8'
        }`}
      >
        <span aria-hidden="true">🇺🇸</span>
        <span className="font-mono tracking-wider">EN</span>
      </button>
    </div>
  );
}
