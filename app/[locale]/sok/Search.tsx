'use client';

import s from './Search.module.scss';
import cn from 'classnames';
import { Button, Loader } from '@/components';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Markdown } from 'next-dato-utils/components';
import type { SearchResult } from '@/app/api/search/route';
import { useTranslations } from 'next-intl';

type SearchProps = {
	query?: string | null;
	locale: SiteLocale;
};

export function Search({ query: _query, locale }: SearchProps) {
	const t = useTranslations();
	const [query, setQuery] = useState<string | null>(_query ?? null);
	const [results, setResults] = useState<SearchResult | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const searchTimeout = useRef<NodeJS.Timeout | null>(null);
	const abortController = useRef<AbortController | null>(null);

	const siteSearch = (q: string | null) => {
		const variables = {
			q: q
				? `${q
						.split(' ')
						.filter((el) => el)
						.join('|')}`
				: undefined,
			locale,
		};

		if (
			!Object.keys(variables).filter((k) => variables[k as keyof typeof variables] !== undefined)
				.length
		)
			return;

		setResults(null);
		setLoading(true);
		setError(null);

		if (abortController.current) abortController.current.abort();
		abortController.current = new AbortController();
		fetch('/api/search', {
			body: JSON.stringify(variables),
			method: 'POST',
			signal: abortController.current.signal,
			headers: { 'Content-Type': 'application/json' },
		})
			.then(async (res) => {
				const results = await res.json();
				if (res.status === 200) {
					setResults(results);
				} else setError(new Error('error in search'));
			})
			.catch((err) => {
				if (err.name === 'AbortError') return;
				setError(err);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setResults(null);
		setLoading(false);
		setError(null);
		searchTimeout.current && clearTimeout(searchTimeout.current);
		searchTimeout.current = setTimeout(() => siteSearch(query), 300);
	}, [query]);

	useEffect(() => {
		return () => setQuery(null);
	}, []);

	return (
		<>
			<section className={cn(s.container)}>
				<div className={cn(s.search)}>
					<input
						className={'mid'}
						placeholder={t('Menu.search')}
						value={query || ''}
						autoFocus={true}
						onChange={({ target: { value } }) => setQuery(value)}
					/>
				</div>
				{results && Object.keys(results).length > 0 ? (
					<>
						{Object.keys(results).map((type, idx) => (
							<ul key={idx}>
								<li>
									<h3>{results[type][0].category}</h3>
								</li>
								{results[type]?.map(({ category, title, text, slug }, i) => (
									<li key={i}>
										<h1>
											<Link href={{ pathname: slug }}>{title}</Link>
										</h1>
										<div className={s.intro}>
											<Markdown content={text} />
										</div>
										<Link
											href={{
												pathname: slug,
											}}
										>
											<Button>{t('General.readMore')}</Button>
										</Link>
									</li>
								))}
							</ul>
						))}
					</>
				) : loading ? (
					<div className={s.loading}>
						<Loader />
					</div>
				) : (
					results &&
					query &&
					!loading && (
						<p className={cn(s.nohits, 'small')}>
							{t('Search.noHitsFor')}: &quot;{query}&quot;
						</p>
					)
				)}
				{error && (
					<div className={s.error}>
						<p>{typeof error === 'string' ? error : error.message}</p>
					</div>
				)}
			</section>
		</>
	);
}
