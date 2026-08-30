import { getRoute } from '@/datocms.config';
import { Link } from '@/i18n/routing';

export type Props = {
	link: ExternalLinkRecord | InternalLinkRecord | any;
	className?: string;
	children?: React.ReactNode;
};

export default function DatoLink({ link, className, children }: Props) {
	//return children;
	if (!link) return <a className={className}>{children}</a>;

	const slug = link.__typename === 'ExternalLinkRecord' ? link.url : getRoute(link.record);
	const { title } = link;
	console.log(slug);
	return link.__typename === 'ExternalLinkRecord' ? (
		<a href={slug}>{children ?? title}</a>
	) : (
		<Link href={slug} className={className}>
			{children ?? title}
		</Link>
	);
}
