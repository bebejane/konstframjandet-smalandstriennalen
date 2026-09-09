import { PageHeader } from '@/components';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { Search } from './Search';
import { getCurrentYear } from '@/lib/utils';
import { siteSearch } from '@/lib/search';

export const dynamic = 'force-dynamic';

export default async function SearchPage({
	params,
	searchParams: _searchParams,
}: PageProps<'/[locale]/sok'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const searchParams = await _searchParams;
	const year = await getCurrentYear(locale);
	const t = await getTranslations();
	const query = typeof searchParams.q === 'string' ? searchParams.q : undefined;

	const results = query ? await siteSearch({ q: query, locale }) : null;

	return (
		<>
			<PageHeader title={t('Menu.search')} year={year} route='/sok' />
			<Search results={results} />
		</>
	);
}

export async function generateMetadata({ params }: PageProps<'/[locale]/sok'>): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('search'),
		locale: locale as SiteLocale,
		pathname: getPathname({ locale, href: { pathname: '/sok' } }),
	});
}
