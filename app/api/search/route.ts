import config from '@/datocms.config';
import { NextRequest, NextResponse } from 'next/server';
import { apiQuery } from 'next-dato-utils/api';
import { SiteSearchDocument } from '@/graphql';
import { truncateText } from 'next-dato-utils/utils';
import { client } from '@/lib/client';

export type SearchResult = {
	[index: string]: {
		__typename:
			| 'AboutRecord'
			| 'ParticipantRecord'
			| 'PartnerRecord'
			| 'NewsRecord'
			| 'ExhibitionRecord'
			| 'LocationRecord'
			| 'ProgramRecord';
		_apiKey: string;
		category: string;
		title: string;
		text: string;
		slug: string;
	}[];
};

export async function POST(req: NextRequest) {
	try {
		const params = await req.json();
		const results = await siteSearch(params);
		return NextResponse.json(results);
	} catch (err) {
		console.error(err);
		return NextResponse.json(err, { status: 500 });
	}
}

export const searchModel = async (query: string, model: string, locale: string) => {
	const result = [];
	for await (const record of client.items.listPagedIterator(
		{
			order_by: '_rank_DESC',
			filter: {
				type: model,
				query,
			},
			locale,
		},
		{ perPage: 500 },
	)) {
		result.push(record);
	}
	return result;
};

export const siteSearch = async (opt: { q: string; locale: string }) => {
	const { q, locale } = opt;

	if (!q) return {};

	const variables: { query?: string; locale: string } = {
		query: q
			? `${q
					.split(' ')
					.filter((el) => el)
					.join('|')}`
			: undefined,
		locale,
	};

	if (!variables?.query) return {};

	const itemTypes = await client.itemTypes.list();
	const models = ['about', 'news', 'program', 'exhibition', 'participant', 'partner', 'location'];
	const result = await Promise.all(
		models.map((model) => searchModel(variables.query!, model, locale)),
	);
	const search = result
		.flat()
		.map((el) => ({ ...el, _api_key: itemTypes?.find((t) => t.id === el.item_type.id)?.api_key }));

	const data: { [key: string]: any[] } = {};
	const first = 100;

	for (let i = 0; i < search.length; i += first) {
		const chunk = search.slice(i, first - 1);
		const variables = {
			first,
			skip: i,
			locale: locale as SiteLocale,
			aboutIds: [],
			newsIds: [],
			programIds: [],
			exhibitionIds: [],
			participantIds: [],
			locationIds: [],
			partnerIds: [],
		};
		models.forEach((model) => {
			const k = `${model}Ids` as keyof typeof variables;
			Object.assign(variables, {
				[k]: chunk.filter((el) => el._api_key === model).map((el) => el.id),
			});
		});

		const res = await apiQuery(SiteSearchDocument, { variables });

		Object.keys(res).forEach((k) => {
			data[k] = data[k] ?? [];
			data[k] = data[k].concat(res[k as keyof typeof res]);
		});
	}

	delete data.draftUrl;

	for (const type in data) {
		if (!data[type].length) {
			delete data[type];
			continue;
		}
		const items = data[type].filter((el) => el);
		const results = [];
		for (const item of items) {
			const d = {
				__typename: item.__typename,
				_modelApiKey: item._modelApiKey,
				category: itemTypes?.find(({ api_key }) => api_key === item._modelApiKey)?.name,
				title: item.title,
				text: truncateText(item.text, { sentences: 1, useEllipsis: true, minLength: 100 }),
				slug: await config.route(item, locale),
			};
			results.push(d);
		}
		data[type] = results;
	}
	return data;
};
