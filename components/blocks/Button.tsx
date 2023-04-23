import s from './Button.module.scss'
import React from 'react'
import DatoLink from '/components/nav/DatoLink'

export type ButtonBlockProps = { data: ButtonRecord, onClick: Function }

export default function Button({ data: { link } }: ButtonBlockProps) {
	return <DatoLink link={link} className={s.button} />
}