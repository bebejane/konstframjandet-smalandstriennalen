import type { NextRequest, NextResponse } from 'next/server'
import { apiQuery } from 'dato-nextjs-utils/api';
import { buildClient } from '@datocms/cma-client';
import { SiteSearchDocument } from '/graphql';
import { truncateParagraph, truncateWords, isEmptyObject, recordToSlug } from '/lib/utils';

export const config = {
  runtime: 'edge',
}

export type SearchResult = {
  [index: string]: {
    __typename: 'AboutRecord' | 'ParticipantRecord' | 'PartnerRecord' | 'NewsRecord' | 'ExhibitionRecord' | 'LocationRecord' | 'ProgramRecord',
    _apiKey: string
    category: string
    title: string
    text: string
    slug: string
  }[]
}

export default async function handler(req: NextRequest, res: NextResponse) {

  try {

    const params = await req.json();
    const results = await siteSearch(params)
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })

  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify(err), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    })
  }
}


export const siteSearch = async (opt: any) => {

  const { q, locale } = opt;

  if (!q) return {}

  const variables = {
    query: q ? `${q.split(' ').filter(el => el).join('|')}` : undefined,
    locale
  };

  if (isEmptyObject(variables))
    return {}

  const client = buildClient({ apiToken: process.env.GRAPHQL_API_TOKEN });
  const itemTypes = await client.itemTypes.list();

  const search = (await client.items.list({
    filter: { type: itemTypes.map(m => m.api_key).join(','), query: q },
    order_by: '_rank_DESC',
    locale,
    allPages: true
  })).map(el => ({
    ...el,
    _api_key: itemTypes.find((t) => t.id === el.item_type.id).api_key
  }))

  const data: { [key: string]: any[] } = {}
  const first = 100

  for (let i = 0; i < search.length; i += first) {
    const chunk = search.slice(i, first - 1)
    const res = await apiQuery(SiteSearchDocument, {
      variables: {
        aboutIds: chunk.filter(el => el._api_key === 'about').map(el => el.id),
        newsIds: chunk.filter(el => el._api_key === 'news').map(el => el.id),
        programIds: chunk.filter(el => el._api_key === 'program').map(el => el.id),
        exhibitionIds: chunk.filter(el => el._api_key === 'exhibition').map(el => el.id),
        participantIds: chunk.filter(el => el._api_key === 'participant').map(el => el.id),
        partnerIds: chunk.filter(el => el._api_key === 'partner').map(el => el.id),
        locationIds: chunk.filter(el => el._api_key === 'location').map(el => el.id),
        first,
        skip: i,
        locale
      }
    })

    Object.keys(res).forEach((k) => {
      data[k] = data[k] ?? [];
      data[k] = data[k].concat(res[k])
    })
  }

  Object.keys(data).forEach(type => {
    if (!data[type].length)
      delete data[type]
    else
      data[type] = data[type].map(el => ({
        __typename: el.__typename,
        _modelApiKey: el._modelApiKey,
        category: itemTypes.find(({ api_key }) => api_key === el._modelApiKey).name,
        title: el.title,
        text: truncateWords(el.text, 200),
        slug: recordToSlug(el)
      }))
  })

  return data;
}
