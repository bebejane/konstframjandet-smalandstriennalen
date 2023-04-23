import s from './Card.module.scss'
import cn from 'classnames'
import React from 'react'

export type CardProps = {
  children: React.ReactNode | React.ReactNode[],
  className?: string
  hideLastOnDesktop?: boolean
}

export default function Card({ children, className, hideLastOnDesktop = false }: CardProps) {

  return (
    <li className={cn(s.card, className, hideLastOnDesktop && s.hideLastOnDesktop)}>
      {children}
    </li>
  )
}