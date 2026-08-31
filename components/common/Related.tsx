import s from './Related.module.scss';
import { Image } from 'react-datocms';
import { Link } from '@/i18n/routing';
import { getRoute } from '@/datocms.config';

export type Props = {
	header: string;
	items: (ParticipantRecord | LocationRecord | ProgramRecord | ExhibitionRecord)[];
};

export default function Related({ header, items, noLink }: Props) {
	if (!items?.length) return null;

	return (
		<section className={s.related}>
			<h2>{header}</h2>
			<ul>
				{items.map((item, idx) => {
					const title = 'name' in item ? item.name : 'title' in item ? item.title : '';
					let href = noLink ? null : getRoute(items[idx]);
					const content = (
						<>
							<figure>
								{item.image?.responsiveImage && <Image data={item.image.responsiveImage} />}
								<div className={s.border}></div>
							</figure>
							<figcaption>{title}</figcaption>
						</>
					);
					return (
						<li key={item.id} className={noLink ? s.nolink : undefined}>
							{href && <Link href={href}>{content}</Link>}
							{!href && content}
						</li>
					);
				})}
			</ul>
		</section>
	);
}
