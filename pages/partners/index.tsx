import s from "./index.module.scss";
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { AllLocationsDocument, AllPartnersDocument } from "/graphql";
import { CardContainer, Card, Thumbnail, Link } from "/components";
import { useRouter } from "next/router";
import { DatoSEO } from "dato-nextjs-utils/components";
import { useTranslations } from "next-intl";
import { pageSlugs } from "/lib/i18n";
import { usePage } from "/lib/context/page";

export type Props = {
  partners: PartnerRecord[]
  locations: LocationRecord[]
  financiers: YearRecord
}

export default function Partners({ partners, locations }: Props) {

  const t = useTranslations()
  const { asPath } = useRouter()
  const { year } = usePage()

  return (
    <>
      <DatoSEO title={t('Menu.partners')} />
      <CardContainer key={`${asPath}-partners`}>
        {partners.map(({ id, image, title, intro, slug }) =>
          <Card key={id}>
            <Thumbnail
              title={title}
              image={image}
              intro={intro}
              titleRows={1}
              slug={`/partners/${slug}`}
            />
          </Card>
        )}
      </CardContainer>

      <h2 id="locations" className={cn(s.head, s.locations)}>{t('Menu.locations')}</h2>
      <CardContainer key={`${asPath}-locations`} className={s.locations}>
        {locations.map(({ id, image, title, intro, slug, year }) =>
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

export const getStaticProps = withGlobalProps({ queries: [AllPartnersDocument, AllLocationsDocument] }, async ({ props, revalidate }: any) => {

  return {
    props: {
      ...props,
      page: {
        section: 'partners',
        slugs: pageSlugs('partners', props.year.title)
      } as PageProps
    },
    revalidate
  };
});