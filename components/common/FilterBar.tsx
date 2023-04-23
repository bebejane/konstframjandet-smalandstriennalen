import s from './FilterBar.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export type FilterOption = {
  id: string
  label: string
  description: string

}

export type Props = {
  options: FilterOption[],
  multi?: boolean,
  onChange: (value: string[] | string) => void
}

export default function FilterBar({ options = [], onChange, multi = false }: Props) {

  const t = useTranslations('FilterBar')
  const [selected, setSelected] = useState<FilterOption[]>([])

  useEffect(() => {
    onChange(multi ? selected.map(({ id }) => id) : selected[0]?.id)
  }, [selected])

  return (
    <nav className={s.filter}>
      <ul>
        <li
          onClick={() => setSelected([])}
          className={cn(!selected?.length && s.selected)}
        >{t('all')}</li>
        {options.map((opt, idx) =>
          <li
            key={idx}
            onClick={() => setSelected(selected.find(({ id }) => id === opt.id) ? selected.filter(({ id }) => id !== opt.id) : multi ? [...selected, opt] : [opt])}
            className={cn(selected?.find(({ id }) => id === opt.id) && s.selected)}
          >
            {opt.label}
          </li>
        )}
      </ul>
      {(!multi && selected) &&
        <div className={s.description}>{selected[0]?.description}</div>
      }
    </nav>
  )
}

