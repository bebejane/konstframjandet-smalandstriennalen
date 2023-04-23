import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { apiQueryAll } from '/lib/utils';
import { ParticipantDocument, AllParticipantsDocument } from "/graphql";
import { Article, Related, BackButton } from '/components';
import { useTranslations } from "next-intl";
import { DatoSEO } from "dato-nextjs-utils/components";
import { pageSlugs } from "/lib/i18n";

export type ParticipantExtendedRecord = (ParticipantRecord & ThumbnailImage) & {
  exhibitions: ExhibitionRecord[]
  programs: ProgramRecord[]
}

export type Props = {
  participant: ParticipantExtendedRecord
}

export default function Participant({ participant: { id, image, name, intro, content, exhibitions, programs, _seoMetaTags } }: Props) {
  const t = useTranslations()

  return (
    <>
      <DatoSEO title={name} description={intro} seo={_seoMetaTags} />
      <Article
        id={id}
        key={id}
        title={name}
        image={image}
        intro={intro}
        content={content}
        onClick={(imageId) => { }}
      />
      <Related header={t('Related.participatingIn')} items={[...exhibitions, ...programs]} />
      <BackButton>{t('BackButton.showAllParticipants')}</BackButton>
    </>
  );
}

export async function getStaticPaths() {
  const { participants } = await apiQueryAll(AllParticipantsDocument)
  const paths = participants.map(({ slug }) => ({ params: { participant: slug } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const slug = context.params.participant;
  const { participant } = await apiQuery(ParticipantDocument, { variables: { slug, locale: context.locale }, preview: context.preview })

  if (!participant)
    return { notFound: true }

  return {
    props: {
      ...props,
      participant,
      page: {
        section: 'participants',
        parent: true,
        title: participant.name,
        slugs: pageSlugs('participants', props.year.title, participant._allSlugLocales)
      } as PageProps
    },
    revalidate
  };
});
