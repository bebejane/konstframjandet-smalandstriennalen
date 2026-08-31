'use client';

import s from './Thumbnail.module.scss';
import cn from 'classnames';
import React, { useState } from 'react';
import { Image } from 'react-datocms/image';
import { useLocale } from 'next-intl';
import { defaultLocale, Link } from '@/i18n/routing';
import { remark } from 'remark';
import strip from 'strip-markdown';
import { truncateWords } from 'next-dato-utils/utils';

export type Props = {
	image?: FileField;
	slug: string;
	title: string;
	titleLength?: number;
	titleRows?: number;
	intro?: string;
	meta?: string;
	year?: NonNullable<YearQuery['year']> | YearRecord;
};

export default function Thumbnail({
	image,
	slug,
	intro,
	title,
	titleLength,
	titleRows = 3,
	meta,
	year,
}: Props) {
	const locale = useLocale();
	const strippedIntro = truncateWords(remark().use(strip).processSync(intro).value as string, 500);
	const [loaded, setLoaded] = useState(false);

	const href = year ? `/${year.title}${slug}` : slug;

	return (
		<Link href={href as any} locale={locale} className={s.thumbnail}>
			{image && (
				<div className={s.imageWrap}>
					{image?.responsiveImage && (
						<>
							<Image
								data={image.responsiveImage}
								className={s.image}
								pictureClassName={s.picture}
								intersectionMargin={'0px 0px 200% 0px'}
								onLoad={() => setLoaded(true)}
							/>
							<div className={s.border}></div>
						</>
					)}
				</div>
			)}
			<h3 className={cn(s[`rows-${titleRows}`])}>
				<span>{titleLength ? truncateWords(title, titleLength) : title}</span>
			</h3>
			{strippedIntro || meta ? (
				<div className='thumb-intro'>
					<p>
						{meta && <strong>{meta.trim()}</strong>}
						{strippedIntro}
					</p>
				</div>
			) : null}
		</Link>
	);
}
