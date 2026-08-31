import s from './LinkButton.module.scss';
import { getRoute } from '@/datocms.config';
import { Link } from '@/i18n/routing';

export type LinkButtonBlockProps = { data: LinkButtonRecord };

export default function LinkButton({ data: { link } }: LinkButtonBlockProps) {
	const t = link.__typename;
	const href =
		t === 'ExternalLinkRecord'
			? link.url
			: t === 'InternalLinkRecord'
				? getRoute(link.record)
				: null;
	const { title } = link;

	if (!href) return null;

	return (
		<Link href={href as any}>
			<button className={s.button}>{title}</button>
		</Link>
	);
}
