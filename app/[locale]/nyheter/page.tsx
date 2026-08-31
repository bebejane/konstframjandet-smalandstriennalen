import s from './page.module.scss';
import { AllNewsDocument } from '@/graphql';
import { getPathname, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { apiQuery } from 'next-dato-utils/api';
import { PageHeader } from '@/components';
import { DraftMode, InfiniteScroll, InfiniteScrollClient } from 'next-dato-utils/components';
import { NewsItem } from './NewsItem';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { getCurrentYear } from '@/lib/utils';

export type Props = {
	news: (NewsRecord & ThumbnailImage)[];
};

export const dynamic = 'force-dynamic';

export default async function News({ params }: PageProps<'/[locale]/nyheter'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getCurrentYear(locale);
	const t = await getTranslations();

	const { allNews, draftUrl } = await apiQuery(AllNewsDocument, {
		variables: { locale: locale as SiteLocale, first: 10 },
	});
	console.log(locale);
	return (
		<>
			<PageHeader title={t('Menu.news')} year={year} />
			<section className={s.news}>
				<ul>
					<InfiniteScrollClient
						id='news'
						initial={allNews}
						query={AllNewsDocument}
						variables={{ locale: locale as SiteLocale, first: 10 }}
					>
						{NewsItem}
					</InfiniteScrollClient>
				</ul>
			</section>
			<DraftMode path={'/nyheter'} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({ params }: PageProps<'/[locale]/nyheter'>) {
	const { locale } = await params;
	const { allNews } = await apiQuery(AllNewsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale },
	});
	return allNews.map((news) => ({ news: news.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/nyheter'>): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('news'),
		locale: locale as SiteLocale,
		pathname: getPathname({ locale, href: { pathname: '/nyheter' } }),
	});
}
