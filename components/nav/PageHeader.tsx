'use client';

import s from './PageHeader.module.scss';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { PROJECT_ABBR } from '@/lib/constant';
import { Link } from '@/i18n/routing';
import { useStore, useShallow } from '@/lib/store';
import { stripStega } from '@datocms/content-link';
import useDevice from '@/lib/hooks/useDevice';

export type PageHeaderProps = {
	title?: string;
	href?: string;
	params?: any;
	noPrefix?: boolean;
	archive?: boolean;
	year?: YearQuery['year'];
};

export default function PageHeader({
	title: _title,
	href,
	params,
	noPrefix,
	archive,
	year,
}: PageHeaderProps) {
	const [showMenu] = useStore(useShallow((state) => [state.showMenu]));
	const t = useTranslations('Menu');
	const isArchiveYear = year?.title !== process.env.NEXT_PUBLIC_CURRENT_YEAR;
	const titlePrefix = isArchiveYear ? `${PROJECT_ABBR}°${year?.title.substring(2)}` : '';
	const title = !_title
		? null
		: stripStega(
				_title && (!year || noPrefix)
					? _title
					: _title
						? `${titlePrefix ? titlePrefix + ' — ' : ''}${_title}`
						: titlePrefix,
			);

	const isHome = href === '/';
	const { isMobile } = useDevice();

	return (
		<>
			<Link href='/' className={s.logo}>
				<img src={`/images/logo-${isMobile ? 'blue' : 'yellow'}.svg`} alt={'Logo'} />
			</Link>
			<header className={cn(s.header, !showMenu && s.full, isHome && s.home)}>
				{href && title ? (
					//@ts-expect-error
					<Link href={{ pathname: href, params }}>
						<h2>
							<span key={title}>
								{title.split('').map((c, idx) => (
									<span
										key={`${idx}`}
										style={{
											animationDelay: `${(idx / title.length) * 0.6}s`,
										}}
									>
										{c}
									</span>
								))}
							</span>
						</h2>
					</Link>
				) : title ? (
					<h2>{title}</h2>
				) : null}
			</header>
			{!isHome && (
				<>
					<div className={s.spacer}></div>
					<div className={s.line}></div>
				</>
			)}
		</>
	);
}
