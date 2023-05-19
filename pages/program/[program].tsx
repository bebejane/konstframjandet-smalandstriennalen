import s from "./[program].module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { apiQueryAll } from '/lib/utils';
import { ProgramDocument, AllProgramsDocument } from "/graphql";
import { Article, Related, BackButton, MetaSection } from '/components';
import { formatDate } from "/lib/utils";
import { useTranslations } from "next-intl";
import { DatoSEO } from "dato-nextjs-utils/components";
import { pageSlugs } from "/lib/i18n";

export type Props = {
  program: ProgramRecord
}

export default function Program({ program: {
  id,
  image,
  title,
  intro,
  startDate,
  endDate,
  time,
  address,
  externalLink,
  location,
  content,
  partipants,
  programCategory,
  partner,
  slug,
  _seoMetaTags
}, program }: Props) {

  const t = useTranslations();


  return (
    <>
      <DatoSEO title={title} description={intro} seo={_seoMetaTags} />
      <Article
        id={id}
        key={id}
        title={title}
        image={image}
        imageSize="small"
        intro={intro}
        content={content}
        partner={partner}
        date={startDate}
        onClick={(imageId) => { }}
      />
      <MetaSection
        key={`${id}-meta`}
        items={[
          { title: t('MetaSection.what'), value: programCategory?.title },
          { title: t('MetaSection.where'), value: address || location.length ? location.map(({ title }) => title) : null, link: (location.length && !address) ? location.map(({ slug }) => `/platser/${slug}`) : null },
          { title: t('MetaSection.when'), value: formatDate(startDate, endDate) },
          { title: t('MetaSection.times'), value: time },
          { title: t('MetaSection.link'), value: externalLink ? t('MetaSection.webpage') : undefined, link: externalLink }
        ]}
      />
      <Related header={t('Menu.participants')} items={partipants} />
      <BackButton>{t('BackButton.showAllPrograms')}</BackButton>
    </>
  );
}

export async function getStaticPaths() {
  const { programs } = await apiQueryAll(AllProgramsDocument)
  const paths = programs.map(({ slug }) => ({ params: { program: slug } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const slug = context.params.program;
  const { program } = await apiQuery(ProgramDocument, { variables: { slug, locale: context.locale }, preview: context.preview })

  if (!program)
    return { notFound: true }

  return {
    props: {
      ...props,
      program,
      page: {
        section: 'program',
        parent: true,
        title: program.title,
        slugs: pageSlugs('program', props.year.title, program._allSlugLocales)
      } as PageProps
    },
    revalidate
  };
});