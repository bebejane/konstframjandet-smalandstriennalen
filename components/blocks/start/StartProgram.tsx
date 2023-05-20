import s from './StartProgram.module.scss'
import React from 'react'
import { CardContainer, Card, Thumbnail } from '/components'
import { useTranslations } from 'next-intl'
import { formatDate } from '/lib/utils'
import Link from '/components/nav/Link'

export type Props = {
  data: StartProgramRecord & {
    programs: ProgramRecord[]
  }
}

export default function StartProgram({ data: { programs } }: Props) {
  const t = useTranslations()

  return (
    <div className={s.container}>
      <header>
        <h2>{t('Menu.program')}</h2>
        <Link href={'/program'} className="small">
          {t('General.showAll')}
        </Link>
      </header>
      <CardContainer hideLastOnDesktop={programs.length % 3 !== 0}>
        {programs.map(({ id, image, intro, title, slug, year, startDate, endDate, programCategory }) =>
          <Card key={id}>
            <Thumbnail
              intro={intro}
              image={image}
              title={title}
              titleLength={100}
              titleRows={3}
              meta={`${formatDate(startDate, endDate)} — ${programCategory.title}`}
              slug={`/${year.title}/program/${slug}`}
              transformHref={false}
            />
          </Card>
        )}
      </CardContainer>
    </div>
  )
}