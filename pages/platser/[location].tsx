import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { apiQueryAll, translatePath } from '/lib/utils';
import { LocationDocument, AllLocationsDocument } from "/graphql";
import { Article, Related, BackButton, MetaSection } from '/components';
import { useTranslations } from "next-intl";
import { DatoSEO } from "dato-nextjs-utils/components";
import { pageSlugs } from "/lib/i18n";
import { useRouter } from "next/router";
import { usePage } from "/lib/context/page";

export type LocationExtendedRecord = (LocationRecord & ThumbnailImage) & {
  exhibitions: ExhibitionRecord[]
  programs: ProgramRecord[]
}

export type Props = {
  location: LocationExtendedRecord
}

export default function Location({ location: { id, image, title, intro, content, webpage, address, city, exhibitions, programs, _seoMetaTags } }: Props) {
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
        imageSize="small"
        content={content}
        onClick={(imageId) => { }}
      />
      <MetaSection
        key={`meta`}
        items={[
          { title: t('MetaSection.where'), value: address },
          { title: t('MetaSection.city'), value: city },
          { title: t('MetaSection.link'), value: webpage ? t('MetaSection.webpage') : undefined, link: webpage }
        ]}
      />
      <Related header={t('Related.related')} items={[...exhibitions, ...programs]} />
      <BackButton href={'/platser'}>{t('BackButton.showAllLocations')}</BackButton>
    </>
  );
}

export async function getStaticPaths() {
  const { locations } = await apiQueryAll(AllLocationsDocument)
  const paths = locations.map(({ slug }) => ({ params: { location: slug } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const slug = context.params.location;
  const { location } = await apiQuery(LocationDocument, { variables: { slug, locale: context.locale }, preview: context.preview })

  if (!location)
    return { notFound: true }

  return {
    props: {
      ...props,
      location,
      page: {
        section: 'locations',
        overview: '/partners#locations',
        parent: true,
        title: location.title,
        slugs: pageSlugs('locations', props.year.title, location._allSlugLocales)
      } as PageProps
    },
    revalidate
  };
});