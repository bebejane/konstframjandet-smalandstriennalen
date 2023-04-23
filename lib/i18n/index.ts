import i18nPaths from './paths.json'
import { locales, defaultLocale } from '/next.config.mjs'
export { locales, defaultLocale }

export const pageSlugs = (id: SectionId, year?: string, slugs?: PageSlug[]): PageSlug[] => {

  return locales.map((locale) => ({
    locale: locale as SiteLocale,
    value: `${year ? `/${year}` : ''}/${i18nPaths[id][locale]}${slugs ? `/${slugs.find((s) => s.locale === locale).value}` : ''}`,
    parent: id === 'home' ? !year ? null : `/${i18nPaths['archive'][locale]}` : `${year ? `/${year}` : ''}${i18nPaths[id][locale] ? `/${i18nPaths[id][locale]}` : ''}`,
  }))
}