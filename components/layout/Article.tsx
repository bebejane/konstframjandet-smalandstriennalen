'use client';

import s from './Article.module.scss';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Content } from '@/components';
import { Image } from 'react-datocms';
import { Link, usePathname } from '@/i18n/routing';
import useStore, { useShallow } from '@/lib/store';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import { Markdown } from 'next-dato-utils/components';
import BalanceText from 'react-balance-text';

export type ArticleProps = {
	id: string;
	children?: React.ReactNode | React.ReactNode[] | undefined;
	title?: string | null;
	subtitle?: string;
	intro?: string | null;
	image?: Maybe<FileField>;
	imageSize?: 'small' | 'medium' | 'large';
	content?: any;
	date?: string;
	partner?: PartnerRecord[];
};

export default function Article({
	id,
	children,
	title,
	content,
	image,
	imageSize,
	intro,
	partner,
	date,
}: ArticleProps) {
	const t = useTranslations();
	const [setImageId, setImages] = useStore(
		useShallow((state) => [state.setImageId, state.setImages]),
	);
	const captionRef = useRef<HTMLElement | null>(null);
	const figureRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const images = [image];
		content?.blocks.forEach((el: any) => {
			el.__typename === 'ImageRecord' && images.push(el.image);
			el.__typename === 'ImageGalleryRecord' && images.push.apply(images, el.images);
		});
		setImages(images.filter((el) => el) as FileField[]);
	}, []);

	return (
		<>
			<div className={cn(s.article, 'article')}>
				<h1>
					<BalanceText>{title}</BalanceText>
				</h1>
				{image && (
					<figure
						className={cn(
							s.mainImage,
							imageSize && s[imageSize],
							image.height > image.width && s.portrait,
						)}
						onClick={() => setImageId(image?.id)}
						ref={figureRef}
					>
						{image.responsiveImage && (
							<Image data={image.responsiveImage} pictureClassName={s.picture} />
						)}
						<figcaption ref={captionRef}>{image.title}</figcaption>
					</figure>
				)}
				<section className='intro'>
					{date && (
						<div className={s.date}>
							<span className='small'>{format(new Date(date), 'MMM').replace('.', '')}</span>
							<span>{format(new Date(date), 'dd').replace('.', '')}</span>
						</div>
					)}
					<Markdown className={s.intro} content={intro} />
				</section>
				{content && (
					<>
						<div className='structured'>
							<Content id={id} content={content} />
						</div>
					</>
				)}
				{children}
				{partner && partner?.length > 0 && (
					<p className='small-body'>
						{t('General.inCooperationWith')}{' '}
						{partner.map(({ id, title, slug }, idx) => (
							<React.Fragment key={id}>
								<Link href={{ pathname: `/partners/[partner]`, params: { partner: slug } }}>
									{title}
								</Link>
								{partner.length - 1 > idx && ', '}
							</React.Fragment>
						))}
					</p>
				)}
			</div>
		</>
	);
}
