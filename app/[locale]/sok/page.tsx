import { Loader, PageHeader } from '@/components';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { Search } from './Search';
import { getCurrentYear } from '@/lib/utils';

export default async function SearchPage({ params, searchParams }: PageProps<'/[locale]/sok'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getCurrentYear(locale);
	const { q } = await searchParams;
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.search')} year={year} />
			<Search query={q as string} locale={locale as SiteLocale} />
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
