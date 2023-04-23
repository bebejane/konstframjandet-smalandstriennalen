import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { apiQueryAll } from '/lib/utils';
import { ExhibitionDocument, AllExhibitionsDocument } from "/graphql";
import { Article, Related, BackButton, MetaSection } from '/components';
import { formatDate } from "/lib/utils";
import { useTranslations } from "next-intl";
import { DatoSEO } from "dato-nextjs-utils/components";
import { pageSlugs } from "/lib/i18n";

export type Props = {
  exhibition: ExhibitionRecord
}

export default function Exhibition({ exhibition: {
  id,
  image,
  title,
  intro,
  externalLink,
  location,
  content,
  participants,
  partner,
  startDate,
  endDate,
  time,
  _seoMetaTags
} }: Props) {

  const t = useTranslations()
  console.log(content)
  return (
    <>
      <DatoSEO title={title} description={intro} seo={_seoMetaTags} />
      <Article
        id={id}
        key={id}
        title={title}
        image={image}
        intro={intro}
        content={content}
        partner={partner}
        onClick={(imageId) => { }}
      />
      <MetaSection
        key={`${id}-meta`}
        items={[
          { title: t('MetaSection.when'), value: formatDate(startDate, endDate) },
          { title: t('MetaSection.times'), value: time },
          { title: t('MetaSection.where'), value: location?.title, link: `/platser/${location?.slug}` },
          { title: t('MetaSection.link'), value: t('MetaSection.webpage'), link: externalLink }
        ]}
      />
      <Related header={t('Menu.participants')} items={participants} />
      <BackButton>{t('BackButton.showAllExhibitons')}</BackButton>
    </>
  )
}

export async function getStaticPaths() {
  const { exhibitions } = await apiQueryAll(AllExhibitionsDocument)
  const paths = exhibitions.map(({ slug }) => ({ params: { exhibition: slug }, locale: 'sv' }))
  paths.forEach(el => paths.push({ ...el, locale: 'en' }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const slug = context.params.exhibition;
  const { exhibition } = await apiQuery(ExhibitionDocument, { variables: { slug, locale: context.locale }, preview: context.preview })

  if (!exhibition)
    return { notFound: true }

  return {
    props: {
      ...props,
      exhibition,
      page: {
        section: 'exhibitions',
        parent: true,
        title: exhibition.title,
        slugs: pageSlugs('exhibitions', props.year.title, exhibition._allSlugLocales),
      } as PageProps
    }
  };
});