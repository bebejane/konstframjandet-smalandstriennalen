'use client';

import s from './StartFullscreenVideo.module.scss';
import cn from 'classnames';
import { VideoPlayer, DatoLink } from '@/components';
import { useRef } from 'react';
import { Markdown } from 'next-dato-utils/components';
import useStore, { useShallow } from '@/lib/store';

export type Props = { data: StartFullscreenVideoRecord };

export default function StartFullscreenVideo({ data: { video, text, headline, link } }: Props) {
	const ref = useRef(null);
	const [showMenu] = useStore(useShallow((state) => [state.showMenu]));

	return (
		<div className={cn(s.fullScreenVideo, !showMenu && s.full)} ref={ref}>
			<DatoLink link={link}>
				<VideoPlayer data={video} />
			</DatoLink>
			<div className={s.textWrap}>
				<h2>{headline}</h2>
				<Markdown className={s.text} content={text} />
			</div>
		</div>
	);
}
