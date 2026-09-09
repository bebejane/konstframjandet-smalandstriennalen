'use client';

import s from './Search.module.scss';
import cn from 'classnames';
import { Button, Loader } from '@/components';
import Link from 'next/link';
import { Markdown } from 'next-dato-utils/components';
import type { SearchResult } from '@/lib/search';
import { useTranslations } from 'next-intl';
import { useQueryState } from 'nuqs';
import { useTransition, useEffect, useRef } from 'react';

type SearchProps = {
	results: SearchResult | null;
};

export function Search({ results }: SearchProps) {
	const t = useTranslations();
	const [query, setQuery] = useQueryState('q', { history: 'replace', shallow: false });
	const [isPending, startTransition] = useTransition();
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		inputRef.current?.focus({ preventScroll: true });
	}, []);

	const handleQueryChange = (value: string) => {
		startTransition(() => {
			setQuery(value || null);
		});
	};

	return (
		<>
			<section className={cn(s.container)}>
				<div className={cn(s.search)}>
					<input
						ref={inputRef}
						className={'mid'}
						placeholder={t('Menu.search')}
						value={query || ''}
						onChange={({ target: { value } }) => handleQueryChange(value)}
					/>
				</div>
				{isPending ? (
					<div className={s.loading}>
						<Loader />
					</div>
				) : results && Object.keys(results).length > 0 ? (
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
				) : (
					query && (
						<p className={cn(s.nohits, 'small')}>
							{t('Search.noHitsFor')}: &quot;{query}&quot;
						</p>
					)
				)}
			</section>
		</>
	);
}
