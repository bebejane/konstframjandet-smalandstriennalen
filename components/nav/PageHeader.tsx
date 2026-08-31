'use client';

import s from './PageHeader.module.scss';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { PROJECT_ABBR } from '@/lib/constant';
import { Link } from '@/i18n/routing';
import { useStore, useShallow } from '@/lib/store';
import { stripStega } from '@datocms/content-link';
import Logo from '@/public/images/logo-text.svg';
import Icon from '@/components/common/Icon';

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
	const titlePrefix = `${PROJECT_ABBR}°${year?.title.substring(2)}`;
	const title = stripStega(
		_title && (!year || noPrefix) ? _title : _title ? `${titlePrefix} — ${_title}` : titlePrefix,
	);
	const isArchiveOverview = archive;
	const isHome = href === '/';

	return (
		<>
			<Link href='/' className={s.logo}>
				<Icon src={Logo} style={{ color: 'var(--yellow)' }} />
			</Link>
			<header className={cn(s.header, !showMenu && s.full, isHome && s.home)}>
				{href ? (
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
				) : (
					<h2>{title}</h2>
				)}
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
