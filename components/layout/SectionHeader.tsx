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
  const { locale, asPath } = router

  const [showMenu] = useStore((state) => [state.showMenu])
  const { section, parent, isHome, slugs } = usePage()

  const parentPath = slugs.find((slug) => slug.locale === locale)?.parent

  const isSearch = section === 'search'
  const label = !isSearch ? `${!isHome ? `${t(section)}` : ''}` : t('search')

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
      <Link href="/" className={s.logo}><Logo /></Link>
      <header className={cn(s.header, !showMenu && s.full, isHome && s.home)}>
        {parentPath && asPath !== parentPath && parent ?
          <Link href={parentPath} transformHref={false}>
            {header}
          </Link>
          : <>{header}</>
        }
      </header>
      {!isHome &&
        <>
          <div className={s.spacer}></div>
          <div className={s.line}></div>
        </>
      }
    </>
  )
}