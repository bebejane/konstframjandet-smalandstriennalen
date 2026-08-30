'use client';

import { getPathname, locales, usePathname as useIntlPathname, routing } from '@/i18n/routing';
import useStore, { useShallow } from '@/lib/store';
import { usePathname } from 'next/navigation';
import { useContext, createContext, use, useEffect } from 'react';

type PageContextProps = {
	year: YearQuery['year'];
	isArchive: boolean;
	isHome: boolean;
	route: keyof typeof routing.pathnames;
};

const initialState: PageContextProps = {
	year: undefined,
	isHome: true,
	isArchive: false,
	route: '/',
};

export const PageContext = createContext(initialState);

export type YearProviderProps = {
	children: any;
	value: Pick<PageContextProps, 'year'>;
};

function isValidRoute(route: string): boolean {
	return Object.keys(routing.pathnames).includes(route);
}

export function getRoute(
	pathname: string,
	intlPathname: string,
	year?: string,
): keyof typeof routing.pathnames {
	const params: Record<string, string> = {};

	intlPathname.split('/').forEach((p, idx) => {
		if (p.startsWith('[') && p.endsWith(']'))
			params[p.replace('[', '').replace(']', '')] = pathname.split('/')[idx];
	});

	const p = getPathname({
		href: {
			pathname: intlPathname,
			params: Object.keys(params).length ? params : undefined,
		} as any,
		locale: 'en',
	})
		.replace('/en', '')
		.split('/')
		.filter((p) => p);

	const isYear = Number.isInteger(Number(p[0]));
	const route = p.find((p) => isValidRoute(p)) ?? '/';

	return route as keyof typeof routing.pathnames;
}

export const PageProvider = ({ children, value }: YearProviderProps) => {
	const pathname = usePathname();
	const intlPathname = useIntlPathname();
	const route = getRoute(pathname, intlPathname, value.year?.title);
	const [setColor] = useStore(useShallow((state) => [state.setColor]));

	useEffect(() => {
		setColor(value.year?.color?.hex ?? null);
	}, [value.year?.color?.hex]);

	return (
		<PageContext.Provider
			value={{
				...initialState,
				...value,
				isArchive: value.year?.title !== process.env.NEXT_PUBLIC_CURRENT_YEAR!,
				isHome: locales.some((l) => pathname === `/${l}`) || pathname === '/',
				route,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export const usePage = (): PageContextProps => {
	return useContext(PageContext);
};
