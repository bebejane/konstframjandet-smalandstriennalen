import { apiQuery } from 'next-dato-utils/api';
import {
	DatoCmsConfig,
	getItemApiKey,
	getUploadReferenceRoutes,
	getItemReferenceRoutes,
} from 'next-dato-utils/config';
import { MetadataRoute } from 'next';
import { SiteDocument, SitemapDocument } from '@/graphql';
import { defaultLocale, getPathname, locales, routing } from '@/i18n/routing';
import years from '@/years.json';

export function getRoute(item: any, locale?: string | null): string {
	const apiKey = getItemApiKey(item);
	if (!apiKey) throw new Error('No api key found');
	const slug = typeof item.slug === 'string' ? item.slug : item.slug[locale ?? defaultLocale];
	let route: string | null = null;

	switch (apiKey) {
		case 'year':
			route = `/[year]`;
			break;
		case 'general':
			route = '/';
			break;
		case 'start':
			route = `/`;
			break;
		case 'about':
			route = `/om/[news]`;
			break;
		case 'program':
			route = `/program/[program]`;
			break;
		case 'program_category':
			route = `/program/[program]`;
			break;
		case 'participant':
			route = `/medverkande/[participant]`;
			break;
		case 'news':
			route = `/nyheter/[news]`;
			break;
		case 'location':
			route = `/platser/[location]`;
			break;
		case 'exhibition':
			route = `/utstallningar-och-projekt/[exhibition]`;
			break;
		case 'partner':
			route = `/partners/[partner]`;
			break;
		case 'contact':
			route = `/kontakt`;
			break;
		case 'in_english':
			route = `/in-english`;
			break;
		default:
			break;
	}

	if (!route) throw new Error('No route found for apiKey: ' + apiKey);

	const params: any = {};
	const routeParams = route.match(/\[(\w+)\]/g)?.map((el) => el.replace('[', '').replace(']', ''));
	routeParams?.forEach((param) => {
		params[param] = slug;
	});

	const year = years.find(({ id }) => id === item.year?.id || id === item.year);
	if (year?.title) {
		params.year = year.title;
		route = `/[year]${route}`;
	}
	return getPathname({
		locale: locale ?? defaultLocale,
		href: { pathname: route as any, params },
	});
}

export default {
	route: async (item, locale) => getRoute(item, locale) ?? null,
	routes: {
		year: async (item, locale) => [getRoute(item, locale)],
		general: async (item, locale) => [getRoute(item, locale)],
		start: async (item, locale) => [getRoute(item, locale)],
		about: async (item, locale) => [
			getRoute(item, locale),
			...(await getItemReferenceRoutes(item)),
		],
		program: async (item, locale) => [
			getRoute(item, locale),
			...(await getItemReferenceRoutes(item)),
		],
		program_category: async (item, locale) => [
			getRoute(item, locale),
			...(await getItemReferenceRoutes(item)),
		],
		participant: async (item, locale) => [
			getRoute(item, locale),
			...(await getItemReferenceRoutes(item)),
		],
		location: async (item, locale) => [
			getRoute(item, locale),
			...(await getItemReferenceRoutes(item)),
		],
		exhibition: async (item, locale) => [
			getRoute(item, locale),
			...(await getItemReferenceRoutes(item)),
		],
		partner: async (item, locale) => [
			getRoute(item, locale),
			...(await getItemReferenceRoutes(item)),
		],
		contact: async (item, locale) => [getRoute(item, locale)],
		in_english: async (item, locale) => [getRoute(item, locale)],
		upload: async ({ id }) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		const locale = defaultLocale;
		const {
			allAbouts,
			allExhibitions,
			allLocations,
			allNews,
			allParticipants,
			allPartners,
			allPrograms,
			allYears,
		} = await apiQuery(SitemapDocument, {
			all: true,
			variables: { locale: locale as SiteLocale },
		});

		const host = process.env.NEXT_PUBLIC_SITE_URL!;
		const staticRoutes = ['/', '/kontakt', '/nyheter'].map((pathname: any) => ({
			url: `${host}${getPathname({ locale, href: { pathname } })}`,
			lastModified: new Date().toISOString(),
			changeFrequency: pathname === '/' ? 'daily' : 'weekly',
			priority: pathname === '/' ? 1 : 0.8,
			alternates: {
				languages: locales
					.filter((l) => l !== locale)
					.reduce(
						(acc, l) => ({
							...acc,
							[l]: `${host}${getPathname({ locale: l, href: { pathname } })}`,
						}),
						{},
					),
			},
		}));

		const dynamicRoutes = [
			...allAbouts,
			...allExhibitions,
			...allLocations,
			...allNews,
			...allParticipants,
			...allPartners,
			...allPrograms,
		].map((item) => ({
			url: `${host}${getRoute(item, locale)}`,
			lastModified: new Date(item._updatedAt).toISOString(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: locales
					.filter((l) => l !== locale)
					.reduce(
						(acc, l) => ({
							...acc,
							[l]: `${host}${getRoute({ ...item, slug: item._allSlugLocales?.find(({ locale: l2 }) => l2 === l)?.value }, l)}`,
						}),
						{},
					),
			},
		}));

		const yearRoutes = allYears.map((item) => ({
			url: `${host}${getRoute(item, locale)}`,
			lastModified: new Date(item._updatedAt).toISOString(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: locales
					.filter((l) => l !== locale)
					.reduce(
						(acc, l) => ({
							...acc,
							[l]: `${host}${getRoute(item, l)}`,
						}),
						{},
					),
			},
		}));
		return [...staticRoutes, ...dynamicRoutes, ...yearRoutes] as MetadataRoute.Sitemap;
	},
	manifest: async (locale = defaultLocale) => {
		const { _site: site } = await apiQuery(SiteDocument, {
			variables: {
				locale: locale as SiteLocale,
			},
		});

		return {
			name: site.globalSeo?.fallbackSeo?.title as string,
			short_name: site.globalSeo?.fallbackSeo?.title as string,
			description: site.globalSeo?.fallbackSeo?.description as string,
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#000000',
			icons: [
				{
					src: '/favicon.ico',
					sizes: 'any',
					type: 'image/x-icon',
				},
			],
		} satisfies MetadataRoute.Manifest;
	},
	robots: async () => {
		return {
			rules: {
				userAgent: '*',
				allow: '/',
				disallow: ['/api'],
			},
		};
	},
} satisfies DatoCmsConfig;
