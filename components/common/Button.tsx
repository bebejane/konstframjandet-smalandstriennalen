import { useState } from 'react'
import s from './Button.module.scss'
import cn from 'classnames'
import { randomInt as rInt } from '/lib/utils'

export type Props = {
  children: React.ReactNode
  className?: string
}

export default function Button({ className, children }: Props) {

  const [leftStyle] = useState({ left: '-10px', transform: `skew(${rInt(0, 1) > 0 ? '-' : ''}${rInt(3, 10)}deg)` })
  const [rightStyle] = useState({ right: '-10px', transform: `skew(${rInt(0, 1) > 0 ? '-' : ''}${rInt(3, 10)}deg)` })

  return (
    <button className={cn(s.button, className)}>
      <span>{children}</span>
      <div className={s.left} style={leftStyle} />
      <div className={s.right} style={rightStyle} />
    </button>
  )
}