import { apiQuery, TypedDocumentNode } from 'next-dato-utils/api';
import { format } from 'date-fns';
import { AllYearsDocument, YearDocument } from '@/graphql';
import { capitalize } from 'next-dato-utils/utils';

export const recordToSlug = (record: any): string => {
	let url;

	if (!record) {
		throw new Error('recordToSlug: Record  is empty');
	}

	if (typeof record === 'string') return record;
	else {
		const { __typename, slug } = record;

		switch (__typename) {
			case 'AboutRecord':
				url = `/om/${slug}`;
				break;
			case 'ParticipantRecord':
				url = `/medverkande/${slug}`;
				break;
			case 'ProgramRecord':
				url = `/program/${slug}`;
				break;
			case 'ExhibitionRecord':
				url = `/utstallningar-och-projekt/${slug}`;
				break;
			case 'NewsRecord':
				url = `/nyheter/${slug}`;
				break;
			case 'LocationRecord':
				url = `/platser/${slug}`;
				break;
			case 'PartnerRecord':
				url = `/partners/${slug}`;
				break;
			default:
				throw Error(`${__typename} is unknown record slug!`);
		}
	}

	return url;
};

export const isEmail = (string: string): boolean => {
	if (!string) return false;
	const matcher =
		/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	if (string.length > 320) return false;
	return matcher.test(string);
};

export const isEmptyObject = (obj: any) =>
	Object.keys(obj).filter((k) => obj[k] !== undefined).length === 0;

export const formatDate = (date: string, endDate?: string) => {
	if (!date) return '';
	const s = capitalize(format(new Date(date), 'dd MMM')).replace('.', '');
	const e = endDate ? capitalize(format(new Date(endDate), 'dd MMM')).replace('.', '') : undefined;
	return `${s}${e ? ` – ${e}` : ''}`;
};
export async function getYear(
	title = process.env.NEXT_PUBLIC_CURRENT_YEAR!,
	locale: SiteLocale | string,
): Promise<NonNullable<YearQuery['year']>> {
	const { year } = await apiQuery(YearDocument, {
		variables: { locale: locale as SiteLocale, title },
	});
	if (!year) throw new Error('No year found');
	return year;
}

export async function getCurrentYear(locale: SiteLocale | string) {
	return await getYear(process.env.NEXT_PUBLIC_CURRENT_YEAR!, locale);
}

export async function getYearId(
	title = process.env.NEXT_PUBLIC_CURRENT_YEAR!,
	locale: SiteLocale | string,
) {
	return (await getYear(title, locale)).id;
}

// export async function getStaticYearPaths(doc: TypedDocumentNode, segment: string) {
// 	const paths = [];

// 	const years = await allYears();

// 	for (let i = 0; i < years.length; i++) {
// 		const { id, title: year } = years[i];
// 		const res = await apiQueryAll(doc, { variables: { yearId: id } });
// 		const items = res[Object.keys(res)[0]];
// 		paths.push.apply(
// 			paths,
// 			items.map((i) => ({ params: { year, [segment]: i.slug } })),
// 		);
// 	}

// 	return {
// 		paths,
// 		fallback: 'blocking',
// 	};
// }

// export const translatePath = (
// 	href: string,
// 	locale: string,
// 	defaultLocale: string,
// 	year?: string,
// ): string => {
// 	const basePath = href.split('/')[1];
// 	const slug = href.split('/').slice(2).join('/');
// 	const key = Object.keys(i18nPaths).find((k) =>
// 		[i18nPaths[k].sv, i18nPaths[k].en].includes(basePath),
// 	);
// 	const translatedPath = !basePath || !key ? '/' : `/${i18nPaths[key][locale]}/${slug}`;

// 	const fullPath = translatedPath
// 		? `${locale !== defaultLocale ? `/${locale}` : ''}${year ? `/${year}` : ''}${translatedPath}`
// 		: undefined;
// 	return fullPath;
// };

// export const allYears = async (locale?: SiteLocale): Promise<YearRecord[]> => {
// 	const { allYears } = await apiQuery(AllYearsDocument, { variables: { locale } });
// 	return allYears;
// };
