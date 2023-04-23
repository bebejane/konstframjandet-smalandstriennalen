import s from "./StartVideo.module.scss"
import cn from 'classnames'
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from 'usehooks-ts'
import Youtube from 'react-youtube'
import Vimeo from '@u-wave/react-vimeo'
import { DatoMarkdown as Markdown } from "dato-nextjs-utils/components";
import useStore from "/lib/store";

export type Props = {
	data: VideoRecord
}

export default function StartVideo({ data }: Props) {

	const ref = useRef<HTMLDivElement | null>(null)
	const [videoHeight, setVideoHeight] = useState(360);
	const { width, height } = useWindowSize()
	const [showMenu] = useStore((state) => [state.showMenu])

	useEffect(() => setVideoHeight((ref.current?.clientWidth / 16) * 9), [width, height, data, ref]) // Set to 16:9

	if (!data || !data.video) return null

	const { provider, providerUid } = data.video
	const { title } = data;
	const style = { height: `${videoHeight}px`, width: '100%' }

	return (
		<div className={cn(s.video, !showMenu && s.full)} ref={ref} >
			{provider === 'youtube' ?
				<Youtube
					opts={{
						playerVars: {
							autoplay: false,
							controls: 0,
							rel: 0
						}
					}}
					videoId={providerUid}
					className={s.player}
					style={style}
				/>
				: provider === 'vimeo' ?
					<Vimeo video={providerUid} className={s.player} style={style} />
					:
					null
			}
			{title &&
				<div className={s.caption}>
					<figcaption>
						<Markdown allowedElements={['em', 'p']}>{title}</Markdown>
					</figcaption>
				</div>}
		</div>
	)
}