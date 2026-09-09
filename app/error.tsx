'use client';

import s from './error.module.scss';
import { ErrorProps } from 'next/error';
import { useEffect } from 'react';

export type NextError = ErrorProps & { digest?: string; message?: string };

export type Props = {
	code?: number;
	error?: NextError;
	message?: string;
	reset?: () => void;
};

export default function Error({ error, code, message, reset }: Props) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	const errorCode = code ?? error?.statusCode ?? 0;

	return (
		<div className={s.error}>
			<h1>Something went wrong!</h1>
			<p className={s.message}>
				{errorCode > 0 && <span>{errorCode}: </span>}
				{message ?? error?.message ?? 'An unexpected error occurred'}
			</p>
			{error?.digest && <div className={s.digest}>#{error.digest}</div>}
			{reset ? <button onClick={reset}>Try again</button> : <a href='/'>Go to home</a>}
		</div>
	);
}
