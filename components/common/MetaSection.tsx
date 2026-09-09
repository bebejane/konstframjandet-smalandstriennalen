import s from './MetaSection.module.scss';
import { Link } from '@/i18n/routing';

export type MetaSectionProps = {
	items: {
		title: string;
		value: string | React.ReactNode | React.ReactNode[];
		link?: string | null;
	}[];
};

export default function MetaSection({ items = [] }: MetaSectionProps) {
	items = items.filter(({ value, title }) => value && title);

	if (!items.length) return null;

	return (
		<section className={s.meta}>
			<ul className='small'>
				{items.map(({ title, value, link }, idx) => {
					const values = !Array.isArray(value) && value ? [value] : value || [];
					const links = (!Array.isArray(link) && link ? [link] : link || []) as Array<string>;

					return (
						<li key={idx}>
							{title}:&nbsp;
							<strong>
								{links.length > 0 ? (
									links
										.map(
											(link, idx) =>
												link.startsWith('http') ? (
													<a href={link}>{values[idx]} &#8599;</a>
												) : (
													<Link href={link}>{values[idx]}</Link>
												),
											//@ts-ignore
										)
										.reduce((prev, curr) => [prev, ', ', curr])
								) : Array.isArray(values) && values.length > 1 ? (
									values.join(', ')
								) : (
									<>{value}</>
								)}
							</strong>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
