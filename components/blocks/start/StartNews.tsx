import s from './StartNews.module.scss';
import React from 'react';
import { CardContainer, Card, Thumbnail } from '/components';
import { useTranslations } from 'next-intl';
import Link from '/components/nav/Link';
import i18nPaths from '/lib/i18n/paths.json';
import { useRouter } from 'next/router';

export type Props = {
	data: StartNewsRecord & {
		news: NewsRecord[];
	};
};

export default function StartNews({ data: { news } }: Props) {
	const t = useTranslations();
	const { locale } = useRouter();

	return (
		<div className={s.container}>
			<header>
				<h2>{t('Menu.news')}</h2>
				<Link href={`/${i18nPaths.news[locale]}`} className='small' transformHref={false}>
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
							transformHref={false}
							titleLength={80}
							titleRows={2}
						/>
					</Card>
				))}
			</CardContainer>
		</div>
	);
}
