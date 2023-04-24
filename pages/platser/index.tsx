import withGlobalProps from "/lib/withGlobalProps";
import { AllLocationsDocument, } from "/graphql";
import { CardContainer, Card, Thumbnail } from "/components";
import { useRouter } from "next/router";
import { DatoSEO } from "dato-nextjs-utils/components";
import { useTranslations } from "next-intl";
import { pageSlugs } from "/lib/i18n";

export type Props = {
  locations: LocationRecord[]
}

export default function Partners({ locations }: Props) {

  const t = useTranslations()
  const { asPath } = useRouter()

  return (
    <>
      <DatoSEO title={t('Menu.partners')} />
      <CardContainer key={`${asPath}-partners`}>
        {locations.map(({ id, image, title, intro, slug }) =>
          <Card key={id}>
            <Thumbnail
              title={title}
              image={image}
              intro={intro}
              titleRows={1}
              slug={`/platser/${slug}`}
            />
          </Card>
        )}
      </CardContainer>
    </>
  );
}

export const getStaticProps = withGlobalProps({ queries: [AllLocationsDocument] }, async ({ props, revalidate }: any) => {

  return {
    props: {
      ...props,
      page: {
        section: 'locations',
        slugs: pageSlugs('locations', props.year.title)
      } as PageProps
    },
    revalidate
  };
});