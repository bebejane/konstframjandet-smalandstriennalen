import s from './LinkButton.module.scss'
import React from 'react'
import DatoLink from '/components/nav/DatoLink'

export type LinkButtonBlockProps = { data: LinkButtonRecord, onClick: Function }

export default function LinkButton({ data: { link } }: LinkButtonBlockProps) {
	return <DatoLink link={link} className={s.button} />
}