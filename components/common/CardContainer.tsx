import s from './CardContainer.module.scss';
import cn from 'classnames';
import React from 'react';

export type Props = {
	children?: React.ReactNode | React.ReactNode[];
	columns?: number;
	className?: string;
};

export default function CardContainer({ children, className, columns = 3 }: Props) {
	return <ul className={cn(s.container, s[`col${columns}`], className)}>{children}</ul>;
}
