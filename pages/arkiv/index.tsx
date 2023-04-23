import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { AllYearsDocument } from "/graphql";
import { CardContainer, Card, Thumbnail } from "/components";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { DatoSEO } from "dato-nextjs-utils/components";
import { pageSlugs } from "/lib/i18n";
import { PROJECT_NAME } from "/lib/constant";

export type Props = {
  years: YearRecord[]
}

export default function Archive({ years }: Props) {

  const t = useTranslations('Menu')
  const { asPath } = useRouter()

  return (
    <>
      <DatoSEO title={t('archive')} />
      <CardContainer key={asPath} columns={2}>
        {years.map(({ id, title, slug, theme, image }) =>
          <Card key={id}>
            <Thumbnail
              title={`${PROJECT_NAME} ${title}`}
              image={image}
              intro={theme}
              slug={`/${title}`}
              transformHref={false}
            />
          </Card>
        )}
      </CardContainer>
    </>
  );
}

export const getStaticProps = withGlobalProps({ queries: [AllYearsDocument] }, async ({ props, revalidate }: any) => {

  return {
    props: {
      ...props,
      years: props.years.slice(1),
      page: {
        section: 'archive',
        slugs: pageSlugs('archive')
      } as PageProps
    },
    revalidate
  };
});