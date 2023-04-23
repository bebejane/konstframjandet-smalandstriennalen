import s from './StartFullscreenVideo.module.scss'
import cn from 'classnames'
import React from 'react'
import { VideoPlayer, DatoLink } from '/components'
import Link from 'next/link'
import { useRef } from 'react'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components'
import useStore from '/lib/store'

export type Props = { data: StartFullscreenVideoRecord }

export default function StartFullscreenVideo({ data: { video, text, headline, link } }: Props) {

	const ref = useRef()
	const [showMenu] = useStore((state) => [state.showMenu])

	return (
		<div className={cn(s.fullScreenVideo, !showMenu && s.full)} ref={ref}>
			<DatoLink link={link}>
				<VideoPlayer data={video} />
			</DatoLink>
			<div className={s.textWrap}>
				<h2>{headline}</h2>
				<Markdown className={s.text}>{text}</Markdown>
			</div>
		</div>
	)
}