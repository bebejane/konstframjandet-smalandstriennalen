'use client';

import s from './Language.module.scss';
import cn from 'classnames';
import { Menu } from '@/lib/menu';
import { locales } from '@/i18n/routing';
import { capitalize } from 'next-dato-utils/utils';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export type Props = {
	menu: Menu;
};

export default function Language({ menu }: Props) {
	const locale = useLocale();

	if (locales.length <= 1) return null;

	return (
		<nav className={s.language}>
			{locales?.map((l, idx) => (
				<Link key={idx} href='/' locale={l} className={cn(locale === l && s.selected)}>
					{capitalize(l)}
				</Link>
			))}
		</nav>
	);
}
