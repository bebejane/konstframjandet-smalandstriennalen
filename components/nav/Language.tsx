'use client';

import s from './Language.module.scss';
import cn from 'classnames';
import { getPathname, locales, routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { capitalize } from 'next-dato-utils/utils';

export type Props = {
	route: keyof typeof routing.pathnames;
	slug?: Record<string, string>;
	year?: string;
	hidden?: boolean;
	className?: string;
};

function getParams(route: string, locale: string, slug?: Record<string, string>, year?: string) {
	const params: Record<string, string> = {};
	const matches = route.match(/\[(\w+)\]/g) ?? [];
	for (const match of matches) {
		const key = match.slice(1, -1);
		if (key === 'year') {
			if (year) params.year = year;
		} else {
			const value = slug?.[locale];
			if (value) params[key] = value;
		}
	}
	return Object.keys(params).length ? params : undefined;
}

function stripLocalePrefix(pathname: string) {
	return pathname.replace(new RegExp(`^/(${locales.join('|')})(?=/|$)`), '') || '/';
}

export default function Language({ route, slug, year, hidden, className }: Props) {
	const locale = useLocale();

	return (
		<nav className={cn(s.language, hidden && s.hidden, className)} aria-hidden={hidden || undefined}>
			{locales?.map((l) => {
				const pathname = stripLocalePrefix(
					getPathname({
						locale: l,
						href: { pathname: route, params: getParams(route, l, slug, year) } as any,
					}),
				);
				return (
					<Link
						key={l}
						href={pathname as any}
						locale={l}
						className={cn(locale === l && s.selected)}
					>
						{capitalize(l)}
					</Link>
				);
			})}
		</nav>
	);
}
