'use client';

import s from './ImageGallery.module.scss';
import cn from 'classnames';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { useState, useRef, useEffect, useCallback, useId } from 'react';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import { useWindowSize } from 'rooks';
import useStore, { useShallow } from '@/lib/store';

export type ImageGalleryBlockProps = {
	data: ImageGalleryRecord;
};

export default function ImageGallery({ data: { images } }: ImageGalleryBlockProps) {
	const id = useId();
	const [setImageId] = useStore(useShallow((state) => [state.setImageId]));
	const swiperRef = useRef<Swiper | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const [index, setIndex] = useState(0);
	const [arrowMarginTop, setArrowMarginTop] = useState(0);
	const { innerHeight, innerWidth } = useWindowSize();
	const isSingleImage = images.length === 1;

	const calculatePositions = useCallback(() => {
		if (!arrowRef.current || !arrowRef.current.clientHeight || !containerRef.current) return;

		const images = Array.from(
			containerRef.current.querySelectorAll<HTMLImageElement>('picture>img'),
		);
		const maxImageHeight = images.reduce(
			(prev, img) => (img.clientHeight > prev ? img.clientHeight : prev),
			0,
		);
		setArrowMarginTop(maxImageHeight / 2 - arrowRef.current.clientHeight / 2);
	}, [setArrowMarginTop]);

	useEffect(() => {
		calculatePositions();
	}, [innerHeight, innerWidth]);

	return (
		<div className={s.gallery} ref={containerRef}>
			<div className={s.fade}></div>
			<SwiperReact
				id={id}
				className={s.swiper}
				loop={isSingleImage ? false : true}
				noSwiping={isSingleImage ? true : false}
				simulateTouch={true}
				slidesPerView='auto'
				initialSlide={index}
				onSlideChange={({ realIndex }) => setIndex(realIndex)}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
			>
				{images.map((item, idx) => (
					<SwiperSlide key={`${idx}`} className={cn(s.slide)}>
						<figure
							onClick={() => setImageId(item.id)}
							data-datocms-content-link-source={item.title}
							data-datocms-content-link-group={true}
						>
							{item.responsiveImage && (
								<Image
									data={item.responsiveImage}
									className={s.image}
									imgClassName={s.picture}
									placeholderClassName={s.picture}
									objectFit={'cover'}
									onLoad={calculatePositions}
								/>
							)}
							<figcaption>
								{item.title && <Markdown allowedElements={['em', 'p']} content={item.title} />}
							</figcaption>
						</figure>
					</SwiperSlide>
				))}
			</SwiperReact>
			{images.length && images.length > 3 && (
				<>
					<div
						ref={arrowRef}
						className={s.prev}
						style={{ top: arrowMarginTop }}
						onClick={() => swiperRef.current?.slidePrev()}
					>
						←
					</div>
					<div
						className={s.next}
						style={{ top: arrowMarginTop }}
						onClick={() => swiperRef.current?.slideNext()}
					>
						→
					</div>
				</>
			)}
		</div>
	);
}
