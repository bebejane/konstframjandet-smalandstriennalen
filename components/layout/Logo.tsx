import s from './Logo.module.scss'
import cn from 'classnames'
import LogoIcon from '/public/images/logo.svg'
import { usePage } from '/lib/context/page'
import Link from 'next/link'

export default function Logo() {
  const { year: { color: { hex }, isArchive }, isHome } = usePage()

  return (
    <div className={cn(s.container, isHome && s.home)} style={isArchive ? { fill: hex } : undefined}>
      <Link href={'/'}><LogoIcon /></Link>
    </div>
  )
}