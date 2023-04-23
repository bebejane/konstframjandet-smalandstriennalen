import s from './Thumbnail.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { Image } from 'react-datocms/image'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components'
import Link from '/components/nav/Link'
import { useRouter } from 'next/router'
import { usePage } from '/lib/context/page'
import { randomInt, truncateText, truncateWords } from '/lib/utils'
import { remark } from 'remark'
import strip from 'strip-markdown'

export type Props = {
  image?: FileField
  slug: string
  title: string
  titleLength?: number
  titleRows?: number
  intro?: string
  meta?: string
  transformHref?: boolean
}

export default function Thumbnail({ image, slug, intro, title, titleLength, titleRows = 3, meta, transformHref = true }: Props) {

  const strippedIntro = truncateWords(remark().use(strip).processSync(intro).value as string, 500)
  const { year: { loadingImage, isArchive } } = usePage()
  const [loadingImageIndex] = useState(loadingImage.length ? randomInt(0, loadingImage.length - 1) : 0)
  const [loaded, setLoaded] = useState(false);

  return (
    <Link href={slug} transformHref={transformHref} className={s.thumbnail}>
      <h3 className={cn(s[`rows-${titleRows}`])}>
        <span>
          {titleLength ? truncateWords(title, titleLength) : title}
        </span>
      </h3>
      {image &&
        <div className={s.imageWrap}>
          <>
            <Image
              data={image.responsiveImage}
              className={s.image}
              pictureClassName={s.picture}
              style={!isArchive ? { opacity: loaded ? 1 : 0.000001 } : {}}
              onLoad={() => setLoaded(true)}
            /><div className={s.border}></div>
          </>
          {loadingImage.length > 0 && !isArchive &&
            <Image
              data={loadingImage[loadingImageIndex].responsiveImage}
              className={cn(s.loader)}
              pictureClassName={cn(s.picture, s.loader, loaded && s.hide)}
              lazyLoad={false}
              objectFit={'contain'}
            />
          }
        </div>
      }
      {strippedIntro &&
        <div className="thumb-intro">
          <p>
            {meta && <strong>{meta}</strong>}
            {strippedIntro}
          </p>
        </div>
      }
    </Link>
  )
}