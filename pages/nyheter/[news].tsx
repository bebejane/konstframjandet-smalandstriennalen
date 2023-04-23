import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { apiQueryAll } from '/lib/utils';
import { NewsDocument, AllNewsDocument } from "/graphql";
import { Article, BackButton } from '/components';
import { useTranslations } from "next-intl";
import { DatoSEO } from "dato-nextjs-utils/components";
import { pageSlugs } from "/lib/i18n";

export type Props = {
  news: NewsRecord
}

export default function News({ news: { id, image, title, intro, content, _seoMetaTags } }: Props) {
  const t = useTranslations('BackButton')

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
        onClick={(imageId) => { }}
      />
      <BackButton>{t('showAllNews')}</BackButton>
    </>
  );
}

export async function getStaticPaths() {
  const { news } = await apiQueryAll(AllNewsDocument)
  const paths = news.map(({ slug }) => ({ params: { news: slug } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const slug = context.params.news;
  const { news } = await apiQuery(NewsDocument, { variables: { slug, locale: context.locale }, preview: context.preview })

  if (!news)
    return { notFound: true }

  return {
    props: {
      ...props,
      news,
      page: {
        section: 'news',
        parent: true,
        overview: `/news`,
        title: news.title,
        slugs: pageSlugs('news', props.year.title, news._allSlugLocales)
      } as PageProps
    },
    revalidate
  };
});