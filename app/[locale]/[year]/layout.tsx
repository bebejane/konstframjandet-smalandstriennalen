import { YearTheme } from '@/components';
import { AllYearsDocument } from '@/graphql';
import { locales } from '@/i18n/routing';
import { getYear } from '@/lib/utils';
import { apiQuery } from 'next-dato-utils/api';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function YearLayout({ children, params }: LayoutProps<'/[locale]/[year]'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getYear(_year, locale);

	return (
		<>
			{children}
			<YearTheme year={year} />
		</>
	);
}

export async function generateStaticParams({ params }: LayoutProps<'/[locale]/[year]'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	const { allYears } = await apiQuery(AllYearsDocument, {
		all: true,
		variables: {
			locale: locale as SiteLocale,
		},
	});
	return allYears.map((year) => ({ year: year.title }));
}
