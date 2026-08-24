import s from './page.module.scss';
import cn from 'classnames';
import { LandOwnershipDocument, StartDataDocument, StartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { Block, LandOwnershipPopup } from '@/components';
import { locales } from '@/i18n/routing';
import { format } from 'date-fns';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LogoHeader } from '@/components/layout/LogoHeader';
import { DraftMode } from 'next-dato-utils/components';
import { getYear } from '@/lib/utils';

export type Props = {
	start: StartRecord;
	landOwnership: LandOwnershipQuery['landOwnership'];
};

const fullBlocks = [
	'StartFullscreenImageRecord',
	'StartFullBleedImageRecord',
	'StartFullscreenVideoRecord',
];

export default async function Home({ params }: PageProps<'/[locale]/[year]'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getYear(_year, locale);
	if (!year) return notFound();

	const { start, landOwnership, draftUrl } = await getData(locale as SiteLocale, year);

	return (
		<>
			<LogoHeader />
			<LandOwnershipPopup data={landOwnership} />
			<div className={s.container}>
				{start.content.map((block, idx) => (
					<section
						key={idx}
						className={cn(fullBlocks.includes(block.__typename ?? '') && s.noborder)}
					>
						<Block data={block} />
					</section>
				))}
			</div>
			<DraftMode path={'/'} url={draftUrl} />
		</>
	);
}

async function getData(locale: SiteLocale, year: YearQuery['year']) {
	let { start, draftUrl } = await apiQuery(StartDocument, {
		variables: { locale },
	});

	if (!start) notFound();

	const date = format(new Date(), 'yyyy-MM-dd');
	const count = {
		participants: parseInt(
			(
				start.content.find(
					(el) => el.__typename === 'StartRandomParticipantRecord',
				) as StartRandomParticipantRecord
			)?.amount ?? '1',
		),
		news: parseInt(
			(start.content.find((el) => el.__typename === 'StartNewsRecord') as StartNewsRecord)
				?.amount ?? '1',
		),
		programs: parseInt(
			(start.content.find((el) => el.__typename === 'StartProgramRecord') as StartProgramRecord)
				?.amount ?? '1',
		),
	};

	// Add extra items to make sure we have enough to fill the grid
	Object.keys(count).forEach(
		(k) => (count[k as keyof typeof count] += count[k as keyof typeof count] % 2 === 0 ? 0 : 1),
	);

	const variables = {
		newsItems: count.news,
		programItems: count.participants,
		yearId: year?.id,
		locale,
		date,
	};

	const {
		allNews,
		allPrograms,
		allParticipants,
		draftUrl: draftUrlData,
	} = await apiQuery(StartDataDocument, {
		variables,
	});

	const { landOwnership, draftUrl: draftUrlLandOwnership } = await apiQuery(LandOwnershipDocument, {
		variables: { locale },
	});

	return {
		landOwnership,
		start: {
			...start,
			content: start.content.map((block) => ({
				...block,
				news: block.__typename === 'StartNewsRecord' ? allNews : null,
				programs: block.__typename === 'StartProgramRecord' ? allPrograms : null,
				participants:
					block.__typename === 'StartRandomParticipantRecord'
						? allParticipants
								.sort(() => (Math.random() > 0.5 ? 1 : -1))
								.slice(0, count.participants)
						: null,
			})),
		},
		draftUrl: [draftUrl, draftUrlData, draftUrlLandOwnership],
	};
}
