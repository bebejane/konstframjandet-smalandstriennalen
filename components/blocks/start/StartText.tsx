import s from './StartText.module.scss';
import React from 'react';
import DatoLink from '@/components/nav/DatoLink';
import { Markdown } from 'next-dato-utils/components';

export type Props = {
	data: StartTextRecord;
};

export default function StartText({ data: { text, headline, link } }: Props) {
	return (
		<div className={s.container}>
			{headline && (
				<header>
					<h2>{headline}</h2>
				</header>
			)}
			<Markdown className={s.text} content={text} />
			<h3>
				<DatoLink link={link} className='small' />
			</h3>
		</div>
	);
}
