import s from './StartSelectedLocation.module.scss'
import React from 'react'
import { CardContainer, Card, Thumbnail } from '/components'
import { useTranslations } from 'next-intl'
import Link from '/components/nav/Link'

export type Props = {
  data: StartSelectedLocationRecord
}

export default function StartSelectedLocation({ data: { locations } }: Props) {
  const t = useTranslations()

  return (
    <div className={s.container}>
      <header>
        <h2>{t('Menu.locations')}</h2>
        <Link href={'/platser'} className="small">
          {t('General.showAll')}
        </Link>
      </header>
      <CardContainer hideLastOnDesktop={locations.length % 3 !== 0}>
        {locations.map(({ id, image, intro, title, slug }) =>
          <Card key={id}>
            <Thumbnail
              intro={intro}
              image={image}
              title={title}
              titleLength={100}
              titleRows={1}
              slug={`/platser/${slug}`}
              transformHref={false}
            />
          </Card>
        )}
      </CardContainer>
    </div>
  )
}