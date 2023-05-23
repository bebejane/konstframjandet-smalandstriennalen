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
          { title: t('MetaSection.where'), value: location.length ? location.map(({ title }) => title) : null, link: location.length ? location.map(({ slug }) => `/platser/${slug}`) : null },
          { title: t('MetaSection.link'), value: externalLink ? t('MetaSection.webpage') : undefined, link: externalLink }
        ]}
      />
      <Related header={t('Menu.participants')} items={participants} />
      <BackButton>{t('BackButton.showAllExhibitons')}</BackButton>
    </>
  )
}

export async function getStaticPaths() {
  const { exhibitions } = await apiQueryAll(AllExhibitionsDocument)
  const paths = exhibitions.map(({ slug }) => ({ params: { exhibition: slug } }))

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
    },
    revalidate
  };
});