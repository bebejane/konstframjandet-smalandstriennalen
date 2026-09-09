import { apiQuery } from 'next-dato-utils/api';
import { default as AboutPage } from './[about]/page';
import { MainAboutDocument } from '@/graphql';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/app/[locale]/layout';
import { getPathname } from '@/i18n/routing';
import { getYearId } from '@/lib/utils';

export default async function About({ params, searchParams }: PageProps<'/[locale]/[year]/om'>) {
	const { locale, year } = await params;

	const { allAbouts } = await apiQuery(MainAboutDocument, {
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});

	const about = allAbouts?.[0];
	if (!about) return notFound();

	return (
		<AboutPage
			searchParams={searchParams}
			params={
				new Promise((resolve) =>
					resolve({
						locale,
						about: about.slug,
						year,
					}),
				)
			}
		/>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/om/[about]'>): Promise<Metadata> {
	const { locale, about: slug, year } = await params;
	const { allAbouts } = await apiQuery(MainAboutDocument, {
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});

	const about = allAbouts?.[0];
	if (!about) return notFound();

	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: about?.title,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: { pathname: `/om` },
		}),
	});
}
