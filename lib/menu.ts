import { apiQuery } from 'next-dato-utils/api';
import { AllYearsDocument, MenuDocument } from '@/graphql';
import { locales, routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { ca } from 'date-fns/locale';

export type Href = {
	pathname: keyof typeof routing.pathnames;
	params?: any;
};
export type Menu = MenuItem[];
export type MenuItem = {
	id: string;
	title: string;
	route: keyof typeof routing.pathnames;
	href?: Href;
	hrefAlt?: Href;
	year?: string;
	archive?: boolean;
	sub: MenuItem[];
	virtual?: boolean;
	count?: number;
};

const base: Partial<MenuItem>[] = [
	{
		id: 'home',
		route: '/',
		archive: false,
		sub: [],
	},
	{
		id: 'news',
		route: '/nyheter',
		archive: false,
		sub: [],
	},
	{
		id: 'exhibitions',
		route: '/utstallningar-och-projekt',
		archive: true,
		sub: [],
	},
	{
		id: 'program',
		route: '/program',
		archive: true,
		sub: [],
	},
	{
		id: 'participants',
		route: '/medverkande',
		archive: true,
		sub: [],
	},
	{
		id: 'locations',
		route: '/platser',
		archive: false,
		sub: [],
	},
	{
		id: 'about',
		route: '/om',
		virtual: true,
		archive: true,
		sub: [],
	},
	{
		id: 'contact',
		route: '/kontakt',
		archive: false,
		sub: [],
	},
	{
		id: 'archive',
		route: '/arkiv',
		archive: false,
		sub: [],
	},
	{
		id: 'search',
		route: '/sok',
		archive: false,
		sub: [],
	},
];

export const buildMenu = async (locale: SiteLocale) => {
	const messages = await getMessages({ locale });
	const altLocale = locales.find((l) => locale != l) as SiteLocale;
	const { allYears } = await apiQuery(AllYearsDocument, {
		variables: { locale },
		stripStega: true,
	});

	const year = allYears.find(({ title }) => title === process.env.NEXT_PUBLIC_CURRENT_YEAR!);
	if (!year) throw new Error('No default year found');

	const res = await apiQuery(MenuDocument, {
		variables: {
			yearId: year.id,
			locale,
			altLocale,
		},
		stripStega: true,
	});

	const archive = await Promise.all(
		allYears
			.filter(({ id }) => id !== year.id)
			.map(({ id }) =>
				apiQuery(MenuDocument, { variables: { yearId: id, locale, altLocale }, stripStega: true }),
			),
	);

	const menu = buildYearMenu(res, { locale, altLocale, isArchive: false, messages });
	const archiveIndex = menu.findIndex((el) => el.route === '/arkiv');
	if (archiveIndex === -1) throw new Error('No archive index found');

	menu[archiveIndex].sub = archive.map((el) => {
		const year = el.year?.title;
		if (!year) throw new Error('No year found');
		const abouts = el.allAbouts.filter((a) => a.year?.title === year);
		const haveAboutOverview = abouts.length > 0;
		const isSingleAboutMenu = abouts.length === 1;

		const href = {
			pathname: `/[year]`,
			params: { year },
		};

		return {
			id: `archive-${year}`,
			route: `/arkiv`,
			title: `LB°${year.substring(2)}`,
			href: haveAboutOverview ? href : null,
			hrefAlt: haveAboutOverview ? href : null,
			sub: buildYearMenu(el, { locale, altLocale, isArchive: true, messages })
				.filter((e) => e.archive && !isSingleAboutMenu)
				.map((e) => ({
					...e,
					id: `archive-${year}-${e.id}`,
					href: {
						pathname: `${href.pathname}${e.route}` as Href['pathname'],
						params: { ...href.params, year },
					},
					hrefAlt: {
						pathname: `${href.pathname}${e.route}` as Href['pathname'],
						params: { ...href.params, year },
					},
					sub:
						abouts.length > 1
							? e.sub?.map((e2) => ({
									...e2,
									id: abouts.find(({ title }) => title === e2.title)?.id,
									href: {
										pathname: `${href.pathname}${e.route}/[about]` as Href['pathname'],
										params: {
											...href.params,
											year,
											about: abouts.find(({ title }) => title === e2.title)?.slug,
										},
									},
									hrefAlt: {
										pathname: `${href.pathname}${e.route}/[about]` as Href['pathname'],
										params: {
											...href.params,
											year,
											about: abouts.find(({ title }) => title === e2.title)?.altSlug,
										},
									},
								}))
							: [],
				}))
				.filter(({ count }) => count || count === null)
				.sort((a, b) => (a.route === '/om' ? -1 : 1)),
		} as MenuItem;
	});

	return menu;
};

export const buildYearMenu = (
	{
		year: _year,
		allAbouts,
		_allAboutsMeta,
		_allParticipantsMeta,
		_allExhibitionsMeta,
		_allLocationsMeta,
		_allProgramsMeta,
	}: MenuQuery,
	{
		isArchive = false,
		messages,
	}: { locale: string; altLocale: string; isArchive: boolean; messages: any },
): MenuItem[] => {
	if (!_year) throw new Error('No year found');
	const year = _year.title;
	const isBaseYear = year === process.env.NEXT_PUBLIC_CURRENT_YEAR;

	const menu = base.map((item) => {
		const { route } = item;
		const mKey = item.id as keyof typeof routing.pathnames;
		const isArchiveOverview = item.route === '/arkiv' && !isArchive;
		const pathname = isArchiveOverview
			? `/arkiv`
			: route === '/arkiv'
				? `/[year]`
				: item.archive
					? `/[year]${route}`
					: route;
		const params = isArchiveOverview ? {} : route === '/arkiv' ? {} : { year };

		const href = {
			pathname,
			params,
		} as Href;

		item.href = href;
		item.hrefAlt = href;
		item.title = messages.Menu[mKey];

		let sub: MenuItem[] = [];
		console.log();
		switch (item.route) {
			case '/om':
				sub = allAbouts
					.filter(({ year }) => (isArchive ? year : true))
					.map(({ id, title, slug, altSlug }) => ({
						id: `about-${id}`,
						route: `/om`,
						title: title,
						archive: isArchive,
						href: {
							pathname: `${href.pathname}/[about]` as Href['pathname'],
							params: { ...href.params, about: slug },
						},
						hrefAlt: {
							pathname: `${href.pathname}/[about]` as Href['pathname'],
							params: { ...href.params, about: altSlug },
						},
						sub: [],
					}));

				const mainAbout =
					allAbouts.filter(({ year }) => year)[0] || allAbouts.filter(({ year }) => !year)[0];

				if (mainAbout) {
					item.href = {
						pathname: `${href.pathname}/[about]` as Href['pathname'],
						params: { ...href.params, about: mainAbout.slug },
					};
					item.hrefAlt = {
						pathname: `${href.pathname}/[about]` as Href['pathname'],
						params: { ...href.params, about: mainAbout.altSlug },
					};
					if (allAbouts.length === 1) sub = [];
				}
				break;
			default:
				break;
		}

		const count =
			item.route === '/om'
				? _allAboutsMeta?.count
				: item.route === '/medverkande'
					? _allParticipantsMeta.count
					: item.route === '/utstallningar-och-projekt'
						? _allExhibitionsMeta.count
						: item.route === '/program'
							? _allProgramsMeta.count
							: null;
		return {
			...item,
			sub: !count ? [] : sub,
			year,
			count,
		};
	});

	return menu.filter(({ count }) => count || count === null) as MenuItem[];
};

export function getMenuItem(id: string, menu: Menu): MenuItem {
	const item = menu.reduce<MenuItem | null>((acc, el) => {
		if (el.id === id) acc = el;
		if (acc) return acc;
		try {
			if (el.sub.length) return getMenuItem(id, el.sub);
		} catch (e) {}
		return acc;
	}, null);

	if (!item) throw new Error(`No menu item found for id: ${id}`);
	return item;
}

export function getMenuItemByPathname(
	href: {
		pathname: keyof typeof routing.pathnames;
		params: any;
	},
	locale: string,
	menu: Menu,
): MenuItem {
	delete href.params.locale;

	const item = menu.reduce<MenuItem | null>((item, el) => {
		if (JSON.stringify(el.href) === JSON.stringify(href)) {
			try {
				item = el;
			} catch (e) {}
		}
		if (item) return item;
		try {
			if (el.sub.length) item = getMenuItemByPathname(href, locale, el.sub);
		} catch (e) {}
		return item;
	}, null);

	if (!item) {
		throw new Error(`No menu item found for pathname: ${href.pathname}`);
	}
	return item;
}

export function getMenuItemAncestorChain(
	id: string,
	menu: Menu,
	chain: string[] = [],
): string[] | null {
	for (const item of menu) {
		if (item.id === id) {
			return [...chain, item.id];
		}
		if (item.sub.length) {
			const result = getMenuItemAncestorChain(id, item.sub, [...chain, item.id]);
			if (result) return result;
		}
	}
	return null;
}

export function getClosesetMenuItem(
	{ pathname, params, locale }: { pathname: any; params: any; locale: string },
	menu: Menu,
): MenuItem {
	const paths = pathname.split('/');
	let menuItem: MenuItem | null = null;

	try {
		menuItem = getMenuItemByPathname({ pathname, params }, locale, menu);
		return menuItem;
	} catch (e) {}

	for (let i = paths.length - 1; i >= 0; i--) {
		const pathname = (paths.slice(0, i + 1).join('/') || '/') as keyof typeof routing.pathnames;

		const routeParams =
			pathname
				.match(/\[(\w+)\]/g)
				?.map((el) => el.replace('[', '').replace(']', ''))
				?.reduce((acc, param) => {
					return { ...acc, [param]: params[param] };
				}, {}) || {};

		try {
			menuItem = getMenuItemByPathname({ pathname, params: routeParams }, locale, menu);
			break;
		} catch (e) {}
	}

	if (!menuItem) throw new Error('No menu item found');
	return menuItem;
}
