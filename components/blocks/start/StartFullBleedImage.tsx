import s from './StartFullBleedImage.module.scss'
import cn from 'classnames';
import React from 'react'
import { Image } from 'react-datocms';
import DatoLink from '/components/nav/DatoLink';
import useStore from '/lib/store';

export type Props = {
  data: StartFullBleedImageRecord
}

export default function StartFullBleedImage({ data: { id, image, headline, text, link } }: Props) {

  const [showMenu] = useStore((state) => [state.showMenu])

  return (
    <DatoLink link={link}>
      <figure className={cn(s.container, !showMenu && s.full)}>
        <Image data={image.responsiveImage} className={s.image} objectFit="cover" />
        <figcaption>
          <h2>{headline}</h2>
          <p>{text}</p>
          <div className={s.fade}></div>
        </figcaption>
      </figure>
    </DatoLink>
  )
}