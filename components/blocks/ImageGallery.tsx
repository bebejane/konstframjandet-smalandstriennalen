import s from './ImageGallery.module.scss'
import "swiper/css";
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import cn from 'classnames'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Image } from 'react-datocms'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { useWindowSize } from 'rooks';

export type ImageGalleryBlockProps = {
	id: string,
	data: ImageGalleryRecord
	onClick?: Function
}

export default function ImageGallery({ data: { id, images }, onClick }: ImageGalleryBlockProps) {

	const swiperRef = useRef<Swiper | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)
	const arrowRef = useRef<HTMLDivElement | null>(null)
	const [index, setIndex] = useState(0)
	const [arrowMarginTop, setArrowMarginTop] = useState(0)
	const { innerHeight, innerWidth } = useWindowSize()
	const isSingleImage = images.length === 1

	const calculatePositions = useCallback(() => {

		if (!arrowRef.current || !arrowRef.current.clientHeight) return

		const images = Array.from(containerRef.current.querySelectorAll<HTMLImageElement>('picture>img'))
		const maxImageHeight = Math.max(...images.map(img => img.clientHeight))
		setArrowMarginTop(maxImageHeight / 2 - (arrowRef.current.clientHeight / 2))

	}, [setArrowMarginTop])

	useEffect(() => {
		calculatePositions()
	}, [innerHeight, innerWidth, calculatePositions])

	return (
		<div className={s.gallery} ref={containerRef}>
			<div className={s.fade}></div>
			<SwiperReact
				id={`${id}-swiper-wrap`}
				className={s.swiper}
				loop={isSingleImage ? false : true}
				noSwiping={isSingleImage ? true : false}
				simulateTouch={true}
				slidesPerView='auto'
				initialSlide={index}
				onSlideChange={({ realIndex }) => setIndex(realIndex)}
				onSwiper={(swiper) => swiperRef.current = swiper}
			>
				{images.map((item, idx) =>
					<SwiperSlide key={`${idx}`} className={cn(s.slide)} >
						<figure id={`${id}-${item.id}`} onClick={() => onClick?.(item.id)} >
							<Image
								data={item.responsiveImage}
								className={s.image}
								pictureClassName={s.picture}
								placeholderClassName={s.picture}
								objectFit={'cover'}
								lazyLoad={index !== idx}
								onLoad={calculatePositions}
							/>
							<figcaption>
								{item.title && <Markdown allowedElements={['em', 'p']}>{item.title}</Markdown>}
							</figcaption>
						</figure>
					</SwiperSlide>
				)}
			</SwiperReact>
			{images.length > 3 &&
				<>
					<div ref={arrowRef} className={s.prev} style={{ top: arrowMarginTop }} onClick={() => swiperRef.current?.slidePrev()}>←</div>
					<div className={s.next} style={{ top: arrowMarginTop }} onClick={() => swiperRef.current?.slideNext()}>→</div>
				</>
			}
		</div>
	)
}