import s from './StartGallery.module.scss'
import cn from 'classnames'
import "swiper/css";
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { Image } from 'react-datocms'
import React, { useEffect, useRef, useState } from 'react'
import DatoLink from '/components/nav/DatoLink';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { useWindowSize } from 'usehooks-ts';

export type Props = {
  data: StartGalleryRecord
}

export default function StartGallery({ data: { id, images, headline, link } }: Props) {

  const swiperRef = useRef<Swiper | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)
  const { height, width } = useWindowSize()
  const [captionHeight, setCaptionHeight] = useState(0)

  useEffect(() => {
    const figures = Array.from(containerRef.current?.querySelectorAll('figcaption'))
    const maxHeight = Math.max(...figures.map(figure => figure.clientHeight + parseInt(getComputedStyle(figure).marginTop.replace('px', ''))))
    setCaptionHeight(maxHeight)
  }, [height, width])

  return (
    <div ref={containerRef} className={s.container}>
      <h2>{headline}</h2>
      <SwiperReact
        id={`${id}-swiper-wrap`}
        className={s.swiper}
        loop={true}
        noSwiping={false}
        simulateTouch={true}
        slidesPerView={'auto'}
        initialSlide={index}
        onSlideChange={({ realIndex }) => setIndex(realIndex)}
        onSwiper={(swiper) => swiperRef.current = swiper}
      >
        {images.map((item, idx) =>
          <SwiperSlide key={`${idx}`} className={cn(s.slide)} >
            <figure id={`${id}-${item.id}`} onClick={() => swiperRef.current.slideNext()}>
              <Image
                data={item.responsiveImage}
                className={s.image}
                pictureClassName={s.picture}
                placeholderClassName={s.picture}
                objectFit={'cover'}
                lazyLoad={idx > 0 ? false : true}
              />
              <figcaption>
                {item.title && <Markdown allowedElements={['em', 'p']}>{item.title}</Markdown>}
              </figcaption>
            </figure>
          </SwiperSlide>
        )}
        <nav className={s.pagination}>
          <ul >
            {images.map(({ id }, idx) =>
              <li
                key={id}
                className={cn(index === idx && s.selected)}
                onClick={() => swiperRef.current.slideTo(idx)}
              />
            )}
          </ul>
        </nav>
        <nav style={{ height: `calc(100% - ${captionHeight}px)` }} className={s.prev} onClick={() => swiperRef.current?.slidePrev()}>←</nav>
        <nav style={{ height: `calc(100% - ${captionHeight}px)` }} className={s.next} onClick={() => swiperRef.current?.slideNext()}>→</nav>
      </SwiperReact>

      <h3 className="small">
        <DatoLink link={link} />
      </h3>

    </div>
  )
}