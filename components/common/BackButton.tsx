'use client';

import Button from '@/components/common/Button';
import { Link, usePathname, exists } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export type Props = {
	children: string;
	year?: YearQuery['year'] | YearRecord;
};

export default function BackButton({ children, year }: Props) {
	const locale = useLocale();
	const _pathname = usePathname().split('/');
	_pathname.pop();
	const pathname = _pathname.join('/');

	if (!exists(pathname)) return null;

	return (
		<Link
			locale={locale}
			href={{
				//@ts-ignore
				pathname,
				params: {
					year: year?.title,
				},
			}}
		>
			<Button className='back'>{children}</Button>
		</Link>
	);
}
