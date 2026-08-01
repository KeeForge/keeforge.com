// Shared locale metadata for the language switcher (src/components/LanguageSwitcher.astro).
// Labels are endonyms — each language's name for itself, not translated.

export type LocaleCode = 'en' | 'de' | 'fr' | 'es';

export interface LocaleMeta {
    code: LocaleCode;
    label: string;
    hrefLang: string;
}

export const locales: LocaleMeta[] = [
    { code: 'en', label: 'English', hrefLang: 'en' },
    { code: 'de', label: 'Deutsch', hrefLang: 'de' },
    { code: 'fr', label: 'Français', hrefLang: 'fr' },
    { code: 'es', label: 'Español', hrefLang: 'es' },
];
