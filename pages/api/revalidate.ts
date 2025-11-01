import { withRevalidate } from 'dato-nextjs-utils/hoc'
import { allYears, translatePath } from '/lib/utils';
import { defaultLocale } from '/lib/i18n'

export default withRevalidate(async (record, revalidate) => {

  const { api_key: apiKey, } = record.model;
  const { slug } = record
  const years = await allYears()
  const year = years.find(({ id }) => record.year === id)
  const prefix = !year ? '' : `/${year.title}`
  const slugs = typeof slug === 'object' ? slug : { [defaultLocale]: slug }
  const paths = []

  Object.keys(slugs).forEach((locale) => {
    const slug = slugs[locale]
    const localePaths = []

    switch (apiKey) {
      case 'year':
        localePaths.push(`/${record.title}`)
        break;
      case 'general':
        localePaths.push(`/`)
        prefix && localePaths.push(`${prefix}/`)
        break;
      case 'start':
        localePaths.push('/')
        prefix && localePaths.push(`${prefix}/`)
        break;
      case 'about':
        localePaths.push(`/om/${slug}`)
        prefix && localePaths.push(`${prefix}/om/${slug}`)
        break;
      case 'program':
        localePaths.push('/program')
        prefix && localePaths.push(`${prefix}/program/${slug}`)
        break;
      case 'program_category':
        localePaths.push('/program')
        prefix && localePaths.push(`${prefix}/program`)
        break;
      case 'participant':
        localePaths.push('/medverkande')
        prefix && localePaths.push(`${prefix}/medverkande`)
        break;
      case 'news':
        localePaths.push('/nyheter')
        prefix && localePaths.push(`${prefix}/nyheter`)
        break;
      case 'location':
        localePaths.push('/platser')
        prefix && localePaths.push(`${prefix}/platser`)
        break;
      case 'exhibition':
        localePaths.push('/utstallningar-och-projekt')
        prefix && localePaths.push(`${prefix}/utstallningar-och-projekt`)
        break;
      case 'partner':
        localePaths.push('/partners')
        prefix && localePaths.push(`${prefix}/partners`)
        break;
      case 'contact':
        localePaths.push(`/kontakt`)
        prefix && localePaths.push(`${prefix}/kontakt`)
        break;
      case 'in_english':
        localePaths.push(`/in-english`)
        prefix && localePaths.push(`${prefix}/in-english`)
        break;
      default:
        break;
    }
    // Revalidate original paths before rewrites are applied
    localePaths.forEach(p => {
      const t = translatePath(p, defaultLocale, defaultLocale, year?.title)
      paths.push(locale === defaultLocale ? t : `/${locale}${t}`)
      //paths.push(t)
    })
  })

  const revalidatePaths = []
  paths.filter(p => !p.startsWith('/en')).forEach(p => {
    revalidatePaths.push(`/en${p}`)
    revalidatePaths.push(p)
  })
  return await revalidate(revalidatePaths)
})