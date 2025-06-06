import { translatePath, allYears } from '/lib/utils';
import { defaultLocale } from '/lib/i18n'
import { withWebPreviewsEdge } from 'dato-nextjs-utils/hoc';

export const config = {
  runtime: 'edge'
}

export default withWebPreviewsEdge(async ({ item, itemType, locale }) => {

  let path = null;

  const { slug: baseSlug, year: yearId, title } = item.attributes
  const isYearRecord = itemType.attributes.api_key === 'year'
  const years = await allYears()
  const year = yearId ? years.find(({ id }) => id === yearId) : undefined
  const slug = typeof baseSlug === 'object' ? baseSlug[locale] : baseSlug

  switch (itemType.attributes.api_key) {
    case 'year':
      path = `/${item.attributes.title}`
      break;
    case 'general':
      path = `/`
      break;
    case 'start':
      path = `/`
      break;
    case 'about':
      path = `/om/${slug}`
      break;
    case 'program':
      path = `/program/${slug}`
      break;
    case 'program_category':
      path = `/program`
      break;
    case 'participant':
      path = `/medverkande/${slug}`
      break;
    case 'news':
      path = `/nyheter/${slug}`
      break;
    case 'location':
      path = `/platser/${slug}`
      break;
    case 'exhibition':
      path = `/utstallningar-och-projekt/${slug}`
      break;
    case 'exhibition':
      path = `/utstallningar-och-projekt/${slug}`
      break;
    case 'partner':
      path = `/partners/${slug}`
      break;
    case 'contact':
      path = `/kontakt`
      break;
    case 'in_english':
      path = `/in-english`
      break;
    default:
      break;
  }

  if (isYearRecord) return path

  return path ? translatePath(path, locale, defaultLocale, year?.title) : null
})