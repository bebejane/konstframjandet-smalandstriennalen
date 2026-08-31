import { AllParticipantsDocument } from '@/graphql';
import { CardContainer, Card, Thumbnail, PageHeader } from '@/components';
import { notFound } from 'next/navigation';
import { apiQuery } from 'next-dato-utils/api';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { getYear, getYearId } from '@/lib/utils';

export type Props = {
	allParticipants: (ParticipantRecord & ThumbnailImage)[];
};

export default async function Participant({ params }: PageProps<'/[locale]/[year]/medverkande'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getYear(_year, locale);

	const { allParticipants, draftUrl } = await apiQuery(AllParticipantsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale, yearId: year.id },
	});

	if (!allParticipants) return notFound();

	const t = await getTranslations('Menu');

	return (
		<>
			<PageHeader title={t('participants')} year={year} />
			<CardContainer>
				{allParticipants.map(({ id, image, name, intro, slug }) => (
					<Card key={id}>
						<Thumbnail
							title={name}
							image={image as FileField}
							intro={intro}
							titleRows={1}
							slug={`/medverkande/${slug}`}
							year={year}
						/>
					</Card>
				))}
			</CardContainer>
			<DraftMode path={'/medverkande'} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({ params }: PageProps<'/[locale]/[year]/medverkande'>) {
	const { locale, year } = await params;
	const { allParticipants } = await apiQuery(AllParticipantsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale },
	});
	return allParticipants.map((participant) => ({ participant: participant.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/medverkande'>): Promise<Metadata> {
	const { locale, year } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('participants'),
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({ locale, href: { pathname: '/medverkande' } }),
	});
}
