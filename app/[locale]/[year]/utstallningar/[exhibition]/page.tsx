import { apiQuery } from 'next-dato-utils/api';
import { ExhibitionDocument, AllExhibitionsDocument } from '@/graphql';
import { Article, Related, BackButton, PageHeader } from '@/components';
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
}: PageProps<'/[locale]/[year]/utstallningar/[exhibition]'>) {
	const { locale, exhibition: slug, year: _year } = await params;
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
		imageEn,
		title,
		intro,
		externalLink,
		time,
		location,
		content,
		participants,
		partner,
		startDate,
		endDate,
		_seoMetaTags,
	} = exhibition;
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.exhibitions')} href={'/utstallningar'} year={year} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				imageEn={imageEn as FileField}
				intro={intro}
				content={content}
				meta={[
					{ title: t('MetaSection.when'), value: formatDate(startDate, endDate, locale) },
					{ title: t('MetaSection.times'), value: time },
					{
						title: t('MetaSection.where'),
						value: location?.title,
						link: `/platser/${location?.slug}`,
					},
					{
						title: t('MetaSection.link'),
						value: externalLink ? t('MetaSection.webpage') : undefined,
						link: externalLink ?? undefined,
					},
				]}
			/>
			<Related header={t('Menu.participants')} items={participants as ParticipantRecord[]} />
			<Related
				header={t('General.inCooperationWith')}
				items={partner as PartnerRecord[]}
				noLink={true}
			/>
			<BackButton year={year}>{t('BackButton.showAllExhibitons')}</BackButton>
			<DraftMode path={`/utstallningar/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({
	params,
}: PageProps<'/[locale]/[year]/utstallningar'>) {
	const { locale, year } = await params;
	const { allExhibitions } = await apiQuery(AllExhibitionsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});
	return allExhibitions.map((exhibition) => ({ exhibition: exhibition.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/utstallningar/[exhibition]'>): Promise<Metadata> {
	const { locale, exhibition: slug, year } = await params;
	const { exhibition, draftUrl } = await apiQuery(ExhibitionDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	const t = await getTranslations('Menu');

	return await buildMetadata({
		title: exhibition?.title,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: { pathname: '/utstallningar/[exhibition]', params: { exhibition: slug } },
		}),
	});
}
