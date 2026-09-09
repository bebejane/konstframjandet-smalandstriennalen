import { apiQuery } from 'next-dato-utils/api';
import { LocationDocument, AllLocationsDocument, YearDocument } from '@/graphql';
import { Article, Related, BackButton, PageHeader, MetaSection } from '@/components';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getPathname, locales } from '@/i18n/routing';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/[locale]/layout';
import { getYear, getYearId } from '@/lib/utils';

export default async function Location({
	params,
}: PageProps<'/[locale]/[year]/platser/[location]'>) {
	const { locale, location: slug, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const { location, draftUrl } = await apiQuery(LocationDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	if (!location) return notFound();
	const year = await getYear(_year, locale);

	const {
		id,
		image,
		title,
		intro,
		address,
		city,
		webpage,
		content,
		_allReferencingExhibitions,
		_allReferencingPrograms,
	} = location;
	const t = await getTranslations();
	const href = '/locations#locations';
	return (
		<>
			<PageHeader title={t('Menu.locations')} href={href} year={year} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				intro={intro}
				imageSize='small'
				content={content}
			/>
			<MetaSection
				key={`meta`}
				items={[
					{ title: t('MetaSection.where'), value: address },
					{ title: t('MetaSection.city'), value: city },
					{
						title: t('MetaSection.link'),
						value: webpage ? t('MetaSection.webpage') : undefined,
						link: webpage,
					},
				]}
			/>
			<Related
				header={t('Related.related')}
				items={[..._allReferencingExhibitions, ..._allReferencingPrograms] as any}
			/>
			<BackButton year={year}>{t('BackButton.showAllLocations')}</BackButton>
			<DraftMode path={`/platser/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({
	params,
}: PageProps<'/[locale]/[year]/platser/[location]'>) {
	const { locale, year } = await params;
	const { allLocations } = await apiQuery(AllLocationsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});
	return allLocations.map((location) => ({ location: location.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/platser/[location]'>): Promise<Metadata> {
	const { locale, location: slug, year } = await params;
	const { location } = await apiQuery(LocationDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: location?.title,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: { pathname: `/platser/[location]`, params: { location: slug } },
		}),
	});
}
