import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { AllAboutsDocument, AllYearsDocument } from "/graphql";
import { pageSlugs } from '/lib/i18n';

export { default } from '/pages/om'

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

	const yearId = props.year.id
	const { abouts } = await apiQuery(AllAboutsDocument, { variables: { first: 1, locale: context.locale, yearId }, preview: context.preview })

	if (!abouts || !abouts.length)
		return { notFound: true }

	return {
		props: {
			...props,
			about: abouts[0],
			page: {
				section: 'home',
				title: abouts[0].title,
				slugs: pageSlugs('home', props.year.title)
			} as PageProps
		},
		revalidate
	};
});

export async function getStaticPaths() {
	const { years } = await apiQuery(AllYearsDocument)
	const paths = years.map(({ title }) => ({ params: { year: title } }))

	return {
		paths,
		fallback: 'blocking',
	};
}
