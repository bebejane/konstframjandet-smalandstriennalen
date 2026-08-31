import s from './Image.module.scss';
import cn from 'classnames';
import { Image as DatoImage } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import { stripStega } from '@datocms/content-link';
import useStore, { useShallow } from '@/lib/store';

export type ImageBlockProps = {
	data: ImageRecord;
};

export default function Image({ data: { image, layout } }: ImageBlockProps) {
	const [setImageId] = useStore(useShallow((state) => [state.setImageId]));
	return (
		<figure
			className={cn(s.figure, s[stripStega(layout)], image.height > image.width && s.portrait)}
			onClick={() => setImageId(image.id)}
		>
			{image.responsiveImage && <DatoImage data={image.responsiveImage} className={s.image} />}
			{image.title && (
				<figcaption>
					<Markdown allowedElements={['em', 'p']} content={image.title} />
				</figcaption>
			)}
		</figure>
	);
}
