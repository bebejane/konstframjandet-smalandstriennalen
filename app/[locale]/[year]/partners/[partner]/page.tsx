import { apiQuery } from 'next-dato-utils/api';
import { PartnerDocument, AllPartnersDocument } from '@/graphql';
import { Article, BackButton, PageHeader } from '@/components';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { getYear, getYearId } from '@/lib/utils';

export type Props = {
	partner: PartnerRecord;
};

export default async function Partner({
	params,
}: PageProps<'/[locale]/[year]/partners/[partner]'>) {
	const { locale, year: _year, partner: slug } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const { partner, draftUrl } = await apiQuery(PartnerDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	if (!partner) return notFound();
	const { id, image, imageEn, title, intro, content, address, city, webpage, _seoMetaTags } =
		partner;
	const year = await getYear(_year, locale);
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.partners')} href={'/partners'} year={year} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				imageEn={imageEn as FileField}
				intro={intro}
				content={content}
				meta={[
					{ title: t('MetaSection.city'), value: city },
					{ title: t('MetaSection.address'), value: address },
					{
						title: t('MetaSection.link'),
						value: webpage ? t('MetaSection.webpage') : undefined,
						link: webpage ? webpage : undefined,
					},
				]}
			/>
			<BackButton year={year}>{t('BackButton.showAllPartners')}</BackButton>
			<DraftMode path={`/partners/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({
	params,
}: PageProps<'/[locale]/[year]/partners/[partner]'>) {
	const { locale, year } = await params;
	const { allPartners } = await apiQuery(AllPartnersDocument, {
		all: true,
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});
	return allPartners.map((partner) => ({ partner: partner.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/partners/[partner]'>): Promise<Metadata> {
	const { locale, partner: slug, year } = await params;
	const { partner } = await apiQuery(PartnerDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: partner?.title,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: { pathname: `/partners/[partner]`, params: { partner: slug } },
		}),
	});
}
