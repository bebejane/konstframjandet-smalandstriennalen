import s from './CardContainer.module.scss';
import cn from 'classnames';
import React from 'react';

export type Props = {
	children?: React.ReactNode | React.ReactNode[];
	columns?: number;
	className?: string;
	hideLastOnDesktop?: boolean;
};

export default function CardContainer({
	children,
	className,
	columns = 3,
	hideLastOnDesktop = false,
}: Props) {
	return (
		<ul
			className={cn(
				s.container,
				s[`col${columns}`],
				className,
				hideLastOnDesktop && s.hideLastOnDesktop,
			)}
		>
			{children}
		</ul>
	);
}
