import s from './Image.module.scss';
import cn from 'classnames';
import React from 'react';
import { Image as DatoImage } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';

export type ImageBlockProps = {
	id: string;
	data: ImageRecord;
	onClick: Function;
	editable?: any;
};

export default function Image({ id, data: { image, layout }, onClick }: ImageBlockProps) {
	return (
		<figure
			className={cn(s.figure, s[layout], image.height > image.width && s.portrait)}
			onClick={() => onClick?.(image.id)}
		>
			<DatoImage data={image.responsiveImage} className={s.image} />
			{image.title && (
				<figcaption>
					<Markdown allowedElements={['em', 'p']} content={image.title} />
				</figcaption>
			)}
		</figure>
	);
}
