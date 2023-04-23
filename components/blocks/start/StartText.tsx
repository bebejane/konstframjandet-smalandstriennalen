import s from './StartText.module.scss'
import React from 'react'
import DatoLink from '/components/nav/DatoLink';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';

export type Props = {
  data: StartTextRecord
}

export default function StartText({ data: { text, headline, link } }: Props) {

  return (
    <div className={s.container}>
      {headline &&
        <header>
          <h2>{headline}</h2>
        </header>
      }

      <Markdown className={s.text}>
        {text}
      </Markdown>

      <h3>
        <DatoLink link={link} className="small" />
      </h3>
    </div>
  )
}