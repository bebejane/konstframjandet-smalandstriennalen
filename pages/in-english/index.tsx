import s from './[about].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { apiQueryAll } from '/lib/utils';
import { InEnglishDocument } from "/graphql";
import { Article } from '/components';
import { DatoSEO } from "dato-nextjs-utils/components";
import { pageSlugs } from '/lib/i18n';

export type Props = {
  inEnglish: InEnglishRecord
}

export default function InEnglish({ inEnglish: { id, image, title, intro, content, _seoMetaTags } }: Props) {

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
      />
    </>
  );
}

export const getStaticProps = withGlobalProps({ queries: [InEnglishDocument] }, async ({ props, revalidate, context }: any) => {
  return {
    props: {
      ...props,
      page: {
        section: 'in-english',
        parent: false,
        title: props.inEnglish.title,
        slugs: pageSlugs('in-english')
      } as PageProps
    },
    revalidate
  };
});