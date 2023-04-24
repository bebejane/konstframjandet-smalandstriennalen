import i18nPaths from './paths.json'
import { locales, defaultLocale } from '/next.config.mjs'
export { locales, defaultLocale }

export const pageSlugs = (id: SectionId, year?: string, slugs?: PageSlug[]): PageSlug[] => {
  return locales.map((locale) => ({
    locale: locale as SiteLocale,
    value: `/${i18nPaths[id][locale]}${slugs ? `/${slugs.find((s) => s.locale === locale).value}` : ''}`,
    parent: id === 'home' ? null : `/${i18nPaths[id][locale]}`
  }))
}