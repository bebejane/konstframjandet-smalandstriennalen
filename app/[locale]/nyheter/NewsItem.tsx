'use client';

import s from './NewsItem.module.scss';
import { Link } from '@/i18n/routing';
import { formatDate } from '@/lib/utils';
import { Markdown } from 'next-dato-utils/components';
import { useLocale, useTranslations } from 'next-intl';

export function NewsItem({ id, title, intro, slug, _createdAt }: AllNewsQuery['allNews'][number]) {
	const t = useTranslations();
	const locale = useLocale();
	return (
		<li key={id} className={s.item}>
			<h3 className='small'>{formatDate(_createdAt, null, locale, false)}</h3>
			<h1>{title}</h1>
			<div className='intro'>
				<Markdown className={s.intro} content={intro} />
			</div>
			<Link
				href={{
					pathname: `/nyheter/[news]`,
					params: { news: slug },
				}}
			>
				<button>{t('General.readMore')}</button>
			</Link>
		</li>
	);
}
