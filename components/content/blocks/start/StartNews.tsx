'use client';

import s from './StartNews.module.scss';
import { CardContainer, Card, Thumbnail } from '@/components';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

export type Props = {
	data: StartNewsRecord & {
		news: NewsRecord[];
	};
};

export default function StartNews({ data: { news } }: Props) {
	const t = useTranslations();
	const locale = useLocale();

	return (
		<div className={s.container}>
			<header>
				<h2>{t('Menu.news')}</h2>
				<Link href={`/nyheter`} locale={locale} className='small'>
					{t('General.showAll')}
				</Link>
			</header>
			<CardContainer hideLastOnDesktop={news.length % 3 !== 0}>
				{news.map(({ id, intro, title, slug }) => (
					<Card key={id}>
						<Thumbnail
							intro={intro}
							title={title}
							slug={`/nyheter/${slug}`}
							titleLength={80}
							titleRows={2}
						/>
					</Card>
				))}
			</CardContainer>
		</div>
	);
}
