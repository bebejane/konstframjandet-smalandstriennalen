import { apiQuery } from 'next-dato-utils/api';
import { ParticipantDocument, AllParticipantsDocument, YearDocument } from '@/graphql';
import { Article, Related, BackButton, PageHeader } from '@/components';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { getYear, getYearId } from '@/lib/utils';

export type ParticipantExtendedRecord = (ParticipantRecord & ThumbnailImage) & {
	exhibitions: ExhibitionRecord[];
	programs: ProgramRecord[];
};

export default async function Participant({
	params,
}: PageProps<'/[locale]/[year]/medverkande/[participant]'>) {
	const { locale, participant: slug, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const { participant, draftUrl } = await apiQuery(ParticipantDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	if (!participant) return notFound();

	const year = await getYear(_year, locale);
	const t = await getTranslations();
	const { id, image, imageEn, name, intro, content, exhibitions, colab, programs } = participant;

	return (
		<>
			<PageHeader title={year.participantName ?? t('Menu.participants')} year={year} />
			<Article
				id={id}
				key={id}
				title={name}
				image={image as FileField}
				imageEn={imageEn as FileField}
				intro={intro}
				content={content}
			/>
			<Related header={t('Related.participatingIn')} items={[...exhibitions, ...programs] as any} />
			<Related
				header={t('General.inCooperationWith')}
				items={colab as PartnerRecord[]}
				noLink={true}
			/>
			<BackButton year={year}>{t('BackButton.showAllParticipants')}</BackButton>
			<DraftMode path={`/medverkande/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({ params }: PageProps<'/[locale]/[year]/medverkande'>) {
	const { locale, year } = await params;
	const { allParticipants } = await apiQuery(AllParticipantsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});
	return allParticipants.map((participant) => ({ participant: participant.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/medverkande/[participant]'>): Promise<Metadata> {
	const { locale, participant: slug, year } = await params;

	const { participant } = await apiQuery(ParticipantDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});

	return await buildMetadata({
		title: participant?.name,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: { pathname: `/[year]/medverkande/[participant]`, params: { participant: slug, year } },
		}),
	});
}
