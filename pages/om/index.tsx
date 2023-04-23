import s from './[about].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { MainAboutDocument } from "/graphql";
import { pageSlugs } from '/lib/i18n';

export { default } from './[about]'

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const yearId = props.year.id
  const { abouts } = await apiQuery(MainAboutDocument, { variables: { locale: context.locale, yearId }, preview: context.preview })
  const about = abouts[0] ?? null

  if (!about)
    return { notFound: true }

  return {
    props: {
      ...props,
      about,
      page: {
        section: 'about',
        title: about.title,
        slugs: pageSlugs('about', props.year.title, about._allSlugLocales)
      } as PageProps
    },
    revalidate
  };
});