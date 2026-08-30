'use client';

import { Button } from '@/components';
import { Link } from '@/i18n/routing';
import { useRouter } from 'next/router';

export type Props = {
	children: React.ReactNode;
	href?: string;
};

export default function BackButton(props: Props) {
	const { children, href } = props;
	const { asPath } = useRouter();
	const segemnts = asPath.split('/');
	segemnts.pop();

	return (
		<Link href={href || segemnts.join('/')} transformHref={false}>
			<Button className='back'>{children}</Button>
		</Link>
	);
}
