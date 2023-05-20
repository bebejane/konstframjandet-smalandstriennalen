import s from './StartRandomParticipant.module.scss'
import React from 'react'
import { CardContainer, Card, Thumbnail } from '/components'
import { useTranslations } from 'next-intl'
import Link from '/components/nav/Link'

export type Props = {
  data: StartRandomParticipantRecord & {
    participants: ParticipantRecord[]
  }
}

export default function StartRandomParticipant({ data: { participants } }: Props) {
  const t = useTranslations()

  return (
    <div className={s.container}>
      <header>
        <h2>{t('Menu.participants')}</h2>
        <Link href={'/medverkande'} className="small">
          {t('General.showAll')}
        </Link>
      </header>
      <CardContainer hideLastOnDesktop={participants.length % 3 !== 0}>
        {participants.map(({ id, image, intro, name, slug, year }) =>
          <Card key={id}>
            <Thumbnail
              image={image}
              title={name}
              intro={intro}
              slug={`/${year.title}/medverkande/${slug}`}
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