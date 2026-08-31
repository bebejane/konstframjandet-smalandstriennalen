import { apiQuery } from 'next-dato-utils/api';
import { ExhibitionDocument, AllExhibitionsDocument } from '@/graphql';
import { Article, Related, BackButton, PageHeader, MetaSection } from '@/components';
import { formatDate, getYear, getYearId } from '@/lib/utils';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getPathname, locales } from '@/i18n/routing';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
export type Props = {
	exhibition: ExhibitionRecord;
};

export default async function Exhibition({
	params,
}: PageProps<'/[locale]/[year]/utstallningar-och-projekt/[exhibition]'>) {
	const { locale, exhibition: slug, year: _year } = await params;
	console.log(locale);
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const { exhibition, draftUrl } = await apiQuery(ExhibitionDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});

	if (!exhibition) return notFound();
	const year = await getYear(_year, locale);
	const {
		id,
		image,
		title,
		intro,
		externalLink,
		location,
		content,
		participants,
		partner,
		startDate,
		endDate,
		//times,
		_seoMetaTags,
	} = exhibition;
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.exhibitions')} href={'/utstallningar-och-projekt'} year={year} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				intro={intro}
				content={content}
				partner={partner as PartnerRecord[]}
			/>
			<MetaSection
				key={`${id}-meta`}
				items={[
					{ title: t('MetaSection.when'), value: formatDate(startDate, endDate) },
					//{ title: t('MetaSection.times'), value: times },
					{
						title: t('MetaSection.where'),
						value: location.length ? location.map(({ title }) => title) : null,
						link: location.length ? location.map(({ slug }) => `/platser/${slug}`) : null,
					},
					{
						title: t('MetaSection.link'),
						value: externalLink ? t('MetaSection.webpage') : undefined,
						link: externalLink,
					},
				]}
			/>
			<Related header={t('Menu.participants')} items={participants as ParticipantRecord[]} />
			<BackButton>{t('BackButton.showAllExhibitons')}</BackButton>
		</>
	);
}

export async function generateStaticParams({
	params,
}: PageProps<'/[locale]/[year]/utstallningar-och-projekt/[exhibition]'>) {
	const { locale, year } = await params;
	const { allExhibitions } = await apiQuery(AllExhibitionsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});
	return allExhibitions.map(({ slug: exhibition }) => ({ exhibition }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/utstallningar-och-projekt/[exhibition]'>): Promise<Metadata> {
	const { locale, exhibition: slug, year } = await params;
	const { exhibition } = await apiQuery(ExhibitionDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	const t = await getTranslations('Menu');

	return await buildMetadata({
		title: exhibition?.title,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: {
				pathname: '/[year]/utstallningar-och-projekt/[exhibition]',
				params: { exhibition: slug, year },
			},
		}),
	});
}
