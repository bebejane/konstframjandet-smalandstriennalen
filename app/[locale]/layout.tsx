import '@/styles/index.scss';
import 'swiper/css';
import s from './layout.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { FooterDocument, GeneralDocument, SiteDocument, YearDocument } from '@/graphql';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { NextIntlClientProvider } from 'next-intl';
import { getPathname, locales } from '@/i18n/routing';
import { DraftModeContentLink } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PageProvider } from '@/lib/context/page';
import { buildMenu } from '@/lib/menu';
import { Footer, FullscreenGallery, Language, Menu } from '@/components';

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
	const { locale } = await params;

	if (!locales.includes(locale)) return notFound();
	setRequestLocale(locale);

	const menu = await buildMenu(locale as SiteLocale);
	const { footer } = await apiQuery(FooterDocument, {
		variables: { locale: locale as SiteLocale },
		tags: ['footer'],
	});

	const { year } = await apiQuery(YearDocument, {
		variables: {
			locale: locale as SiteLocale,
			title: process.env.NEXT_PUBLIC_CURRENT_YEAR!,
		},
		stripStega: true,
	});

	if (!year || !footer) return notFound();

	return (
		<html lang={locale === 'en' ? 'en-US' : 'sv-SE'}>
			<body id='root' className='root'>
				<NextIntlClientProvider>
					<div className={s.layout}>
						<main id='content' className={s.content} data-full={true}>
							<article>{children}</article>
						</main>
					</div>
					<Menu menu={menu} />
					<Language menu={menu} />
					<Footer menu={menu} footer={footer} />
					<FullscreenGallery />
				</NextIntlClientProvider>
				<DraftModeContentLink />
			</body>
		</html>
	);
}

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: LayoutProps<'/[locale]/[year]'>): Promise<Metadata> {
	const { locale, year } = await params;
	if (!locales.includes(locale as any)) return notFound();

	const {
		_site: { globalSeo, faviconMetaTags },
	} = await apiQuery(SiteDocument, {
		variables: { locale: locale as SiteLocale },
	});

	const siteName = globalSeo?.siteName ?? '';

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
		icons: faviconMetaTags.map(({ attributes: { rel, sizes, type, href: url } }) => ({
			rel,
			url,
			sizes,
			type,
		})) as Icon[],
		...(await buildMetadata({
			title: {
				template: `${siteName} — %s`,
				default: siteName ?? '',
			},
			description: globalSeo?.fallbackSeo?.description?.substring(0, 157),
			pathname: getPathname({ locale, href: '/' }),
			image: globalSeo?.fallbackSeo?.image as FileField,
			locale: locale as SiteLocale,
			year,
		})),
	};
}

export type BuildMetadataProps = {
	title?: string | any;
	description?: string | null | undefined;
	pathname?: string;
	image?: FileField | null | undefined;
	locale: SiteLocale;
	year?: string;
};

export async function buildMetadata({
	title: _title,
	description,
	pathname,
	image,
	locale,
	year,
}: BuildMetadataProps): Promise<Metadata> {
	description = !description
		? ''
		: description.length > 160
			? `${description.substring(0, 157)}...`
			: description;

	const url = pathname ? `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}` : undefined;
	const title =
		year && year !== process.env.NEXT_PUBLIC_CURRENT_YEAR
			? `LB°${year.substring(2)}${_title ? ` — ${_title}` : ''}`
			: _title;

	return {
		title,
		alternates: {
			canonical: url,
		},
		description,
		openGraph: {
			title,
			description,
			url,
			images: image
				? [
						{
							url: `${image?.url}?w=1200&h=630&fit=fill&q=80`,
							width: 800,
							height: 600,
							alt: title,
						},
						{
							url: `${image?.url}?w=1600&h=800&fit=fill&q=80`,
							width: 1600,
							height: 800,
							alt: title,
						},
						{
							url: `${image?.url}?w=790&h=627&fit=crop&q=80`,
							width: 790,
							height: 627,
							alt: title,
						},
					]
				: undefined,
			locale: locale === 'sv' ? 'sv_SE' : 'en_US',
			type: 'website',
		},
	};
}
