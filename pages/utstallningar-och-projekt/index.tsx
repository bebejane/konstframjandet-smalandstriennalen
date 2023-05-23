import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { AllExhibitionsDocument } from "/graphql";
import { CardContainer, Card, Thumbnail } from "/components";
import { formatDate } from "/lib/utils";
import { useRouter } from "next/router";
import { DatoSEO } from "dato-nextjs-utils/components";
import { useTranslations } from "next-intl";
import { pageSlugs } from "/lib/i18n";

export type Props = {
  exhibitions: (ExhibitionRecord & ThumbnailImage)[]
}

export default function Exhibition({ exhibitions }: Props) {

  const t = useTranslations()
  const { asPath } = useRouter()

  return (
    <>
      <DatoSEO title={t('Menu.exhibitions')} />
      <CardContainer key={asPath} columns={3}>
        {exhibitions.map(({ id, image, title, startDate, endDate, location, slug }) =>
          <Card key={id}>
            <Thumbnail
              title={title}
              titleRows={2}
              image={image}
              meta={`${startDate ? `${formatDate(startDate, endDate)} • ` : ''}${location.map(l => l.title).join(', ')}`}
              slug={`/utstallningar-och-projekt/${slug}`}
            />
          </Card>
        )}
      </CardContainer>

    </>
  );
}

export const getStaticProps = withGlobalProps({ queries: [AllExhibitionsDocument] }, async ({ props, revalidate }: any) => {

  const { exhibitions } = props;

  return {
    props: {
      ...props,
      page: {
        section: 'exhibitions',
        slugs: pageSlugs('exhibitions', props.year.title)
      } as PageProps
    },
    revalidate
  };
});