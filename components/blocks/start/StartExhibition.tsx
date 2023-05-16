import s from './StartExhibition.module.scss'
import React from 'react'
import { CardContainer, Card, Thumbnail } from '/components'
import { useTranslations } from 'next-intl'
import Link from '/components/nav/Link'

export type Props = {
  data: StartExhibitionRecord & {
    exhibitions: ExhibitionRecord[]
  }
}

export default function StartExhibition({ data: { exhibitions } }: Props) {
  const t = useTranslations()

  return (
    <div className={s.container}>
      <header>
        <h2>{t('Menu.exhibitions')}</h2>
        <Link href={'/utstallningar'} className="small">
          {t('General.showAll')}
        </Link>
      </header>
      <CardContainer hideLastOnDesktop={true}>
        {exhibitions.map(({ id, image, intro, title, slug, year }) =>
          <Card key={id}>
            <Thumbnail
              image={image}
              title={title}
              intro={intro}
              slug={`/${year.title}/utstallningar/${slug}`}
              transformHref={false}
              titleLength={50}
              titleRows={1}
            />
          </Card>
        )}
      </CardContainer>
    </div>
  )
}