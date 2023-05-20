import s from "./index.module.scss";
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { StartDataDocument, StartDocument } from "/graphql";
import { apiQuery } from "dato-nextjs-utils/api";
import { Block } from "/components";
import { pageSlugs } from "/lib/i18n";
import { format } from "date-fns";

export type Props = {
	start: StartRecord
}

const fullBlocks = ['StartFullscreenImageRecord', 'StartFullBleedImageRecord', 'StartFullscreenVideoRecord']

export default function Home({ start }: Props) {

	return (
		<div className={s.container}>
			{start.content.map((block, idx) =>
				<section key={idx} className={cn(fullBlocks.includes(block.__typename) && s.noborder)}>
					<Block
						data={block}
						record={start}
					/>
				</section>
			)}
		</div>
	);
}


export const getStaticProps = withGlobalProps({ queries: [StartDocument] }, async ({ props, revalidate, context }: any) => {

	let { start }: { start: StartRecord } = props;
	const date = format(new Date(), 'yyyy-MM-dd')
	const count = {
		participants: parseInt((start?.content.find(el => el.__typename === 'StartRandomParticipantRecord') as StartRandomParticipantRecord)?.amount ?? '6'),
		news: parseInt((start?.content.find(el => el.__typename === 'StartNewsRecord') as StartNewsRecord)?.amount ?? '6'),
		programs: parseInt((start?.content.find(el => el.__typename === 'StartProgramRecord') as StartProgramRecord)?.amount ?? '6'),
		exhibitions: parseInt((start?.content.find(el => el.__typename === 'StartExhibitionRecord') as StartExhibitionRecord)?.amount ?? '6')
	}

	// Add extra items to make sure we have enough to fill the grid
	Object.keys(count).forEach(k => count[k] += count[k] % 2 === 0 ? 0 : 1)

	const variables = {
		newsItems: count.news || 0,
		programItems: count.participants || 0,
		yearId: props.year.id,
		locale: props.locale,
		date
	}

	const { news, programs, participants, exhibitions }: {
		news: NewsRecord[],
		programs: ProgramRecord[],
		participants: ParticipantRecord[],
		exhibitions: ExhibitionRecord[]
	} = await apiQuery(StartDataDocument, { variables })

	return {
		props: {
			...props,
			start: {
				...start,
				content: start.content.map(block => ({
					...block,
					news: block.__typename === 'StartNewsRecord' ? news : null,
					programs: block.__typename === 'StartProgramRecord' ? programs.slice(0, count.programs) : null,
					exhibitions: block.__typename === 'StartExhibitionRecord' ? exhibitions.slice(0, count.exhibitions) : null,
					participants: block.__typename === 'StartRandomParticipantRecord' ? participants.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, count.participants) : null,
				}))
			},
			page: {
				section: 'home',
				slugs: pageSlugs('home'),
			} as PageProps
		},
		revalidate
	}
})