import s from './SectionHeader.module.scss'
import cn from 'classnames'
import React from 'react'
import Link from '/components/nav/Link'
import { useRouter } from 'next/router'
import { MenuItem } from '/lib/menu'
import { useTranslations } from 'next-intl'
import { usePage } from '/lib/context/page'
import { PROJECT_NAME, PROJECT_ABBR } from '/lib/constant'
import useStore from '/lib/store'

import Logo from '/public/images/logo-text.svg'
import { translatePath } from '/lib/utils'

export type SectionHeaderProps = {
  menu: MenuItem[]
  overview?: boolean
}

export default function SectionHeader() {

  const t = useTranslations('Menu')
  const router = useRouter()
  const { locale, defaultLocale } = router

  const [showMenu] = useStore((state) => [state.showMenu])
  const { section, parent, year, isHome, slugs } = usePage()

  const locationsParentPath = `${translatePath('/partners', locale, defaultLocale, year?.title)}#locations`
  const isLocation = section === 'locations'
  const parentPath = isLocation ? locationsParentPath : slugs.find((slug) => slug.locale === locale)?.parent

  const isSearch = section === 'search'
  const isArchiveOverview = section === 'archive'
  const isOverview = !parent
  const showLine = !isHome

  const yearLabel = `${PROJECT_ABBR}°${year.title.substring(2)}`
  const label = !isSearch ? `${yearLabel}${!isHome ? ` — ${t(isLocation ? 'partners' : section)}` : ''}` : t('search')

  const header = (
    <h2>
      <span key={label}>
        {label.split('').map((c, idx) =>
          <span
            key={`${idx}`}
            style={{
              animationDelay: `${((idx / label.length) * 0.6)}s`,
            }}
          >{c}</span>
        )}
      </span>
    </h2>
  )
  return (
    <>
      <header className={cn(s.header, !showMenu && s.full)}>
        {isHome ? <Logo />
          :
          !isOverview ?
            <Link href={parentPath} transformHref={false}>
              {header}
            </Link>
            : <>{header}</>
        }
      </header>
      {!isHome && <div className={s.spacer}></div>}
      {showLine && <div className={s.line}></div>}
    </>
  )
}