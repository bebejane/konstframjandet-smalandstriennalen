import "swiper/css";
import s from './FullscreenGallery.module.scss'
import cn from 'classnames'
import { DatoMarkdown as Markdown } from "dato-nextjs-utils/components";
import { Image } from 'react-datocms'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper'
import SwiperCore from 'swiper'
import React, { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper'
import { Modal } from "/components";

SwiperCore.use([EffectFade]);


export type FullscreenGalleryProps = {
  images: FileField[],
  onClose: (event?: React.MouseEvent) => void,
  index: number,
  show: boolean
}

export default function FullscreenGallery({ images, onClose, index = 0, show }: FullscreenGalleryProps) {

  const swiperRef = useRef<SwiperType | undefined>()
  const [realIndex, setRealIndex] = useState(0)
  const [title, setTitle] = useState<string>()
  const [loaded, setLoaded] = useState<any>({})
  const [initLoaded, setInitLoaded] = useState(false)
  const isSingleSlide = images?.length === 1
  const isHidden = !images || !show;

  useEffect(() => {
    if (images)
      setTitle(images[realIndex]?.title)
  }, [realIndex, images, setTitle])

  useEffect(() => {
    setRealIndex(index)
  }, [index])

  useEffect(() => { // handle  keys
    const handleKeys = ({ key }) => {
      if (isHidden) return
      if (key === 'ArrowRight') swiperRef?.current?.slideNext()
      if (key === 'ArrowLeft') swiperRef?.current?.slidePrev()
      if (key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeys)
    return () => document.removeEventListener('keydown', handleKeys)
  }, [onClose, isHidden])

  useEffect(() => {
    setTimeout(() => setInitLoaded(true), 300)
  }, [initLoaded]) // Delay loader

  if (isHidden)
    return null

  return (
    <Modal>
      <div className={cn(s.gallery, images.length <= 1 && s.noArrows, isSingleSlide && s.noArrows)}>
        <div className={s.images} onClick={() => !isSingleSlide && swiperRef?.current?.slideNext()}>
          <Swiper
            id={`main-gallery`}
            loop={true}
            spaceBetween={0}
            centeredSlides={true}
            simulateTouch={!isSingleSlide}
            slidesPerView={1}
            initialSlide={index}
            onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
            onSwiper={(swiper) => swiperRef.current = swiper}
          >
            {images.map((image, idx) =>
              <SwiperSlide key={idx} className={cn(s.slide)}>
                <Image
                  pictureClassName={cn(s.image,)}
                  data={image.responsiveImage}
                  lazyLoad={false}
                  usePlaceholder={false}
                  onLoad={() => setLoaded({ ...loaded, [image.id]: true })}
                  fadeInDuration={0}
                />
                {/*!loaded[image.id] && initLoaded &&
                  <div className={s.loading}><Loader /></div>
                */}
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className={s.caption}>
          {title &&
            <Markdown className={cn(s.text, "small")} allowedElements={['em', 'p']}>
              {title}
            </Markdown>
          }
        </div>
        <div className={cn(s.close, "mid")} onClick={onClose}>STÄNG</div>
      </div>
    </Modal>
  )
}