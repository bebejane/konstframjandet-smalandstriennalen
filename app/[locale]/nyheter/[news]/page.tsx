import { apiQuery } from 'next-dato-utils/api';
import { NewsDocument, AllNewsDocument } from '@/graphql';
import { Article, BackButton, PageHeader } from '@/components';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';

export type Props = {
	news: NewsRecord;
};

export default async function News({ params }: PageProps<'/[locale]/nyheter/[news]'>) {
	const { locale, news: slug } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const { news, draftUrl } = await apiQuery(NewsDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	if (!news) return notFound();
	const { id, image, title, intro, content } = news;
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.news')} href='/nyheter' />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				intro={intro}
				content={content}
			/>
			<BackButton>{t('BackButton.showAllNews')}</BackButton>
			<DraftMode path={`/nyheter/${slug}`} url={draftUrl} />
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
}: PageProps<'/[locale]/nyheter/[news]'>): Promise<Metadata> {
	const { locale, news: slug } = await params;
	const { news } = await apiQuery(NewsDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: news?.title,
		locale: locale as SiteLocale,
		pathname: getPathname({
			locale,
			href: { pathname: `/nyheter/[news]`, params: { news: slug } },
		}),
	});
}
