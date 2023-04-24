import i18nPaths from './i18n/paths.json'
import { TypedDocumentNode } from "@apollo/client/core";
import { apiQuery } from "dato-nextjs-utils/api";
import type { ApiQueryOptions } from "dato-nextjs-utils/api";
import type { MenuItem } from '/lib/menu';
import format from "date-fns/format";
import React from "react";
import { AllYearsDocument } from '/graphql';

export const isServer = typeof window === 'undefined';

export const chunkArray = (array: any[] | React.ReactNode[], chunkSize: number) => {
  const newArr = []
  for (let i = 0; i < array.length; i += chunkSize)
    newArr.push(array.slice(i, i + chunkSize));
  return newArr
}

export const parseDatoError = (err: any) => {
  const apiError = err.response?.body?.data;
  if (!apiError) return err?.message ?? err

  const error = {
    _error: apiError,
    message: apiError.map(({ attributes: { details } }) => {
      const { messages } = details
      const m = !messages ? undefined : (!Array.isArray(messages) ? [messages] : messages).join('. ')
      const d = (!Array.isArray(details) ? [details] : details)?.map(({ field_label, field_type, code, extraneous_attributes }) =>
        extraneous_attributes ? `Error fields: ${extraneous_attributes.join(', ')}` : `${field_label} (${field_type}): ${code}`
      )
      return `${m ?? ''} ${d ?? ''}`
    }),
    codes: apiError.map(({ attributes: { code } }) => code),
  }
  return error
}

export const pingEndpoint = async (path: string | string[], method: 'GET' | 'POST' = 'POST') => {
  path = !Array.isArray(path) ? [path] : path;
  path.forEach(p =>
    fetch(p, { method, body: JSON.stringify({ ping: true }) })
      .then(() => console.log(`pinged ${path} endpoint`))
      .catch(err => console.error(`Failed: ping ${path} endpoint`, err))
  )
}

export const recordToSlug = (record: any): string => {

  let url;

  if (!record) {
    throw new Error('recordToSlug: Record  is empty')
  }

  if (typeof record === 'string')
    return record
  else {
    const { __typename, slug } = record

    switch (__typename) {
      case 'AboutRecord':
        url = `/om/${slug}`
        break;
      case 'ParticipantRecord':
        url = `/medverkande/${slug}`
        break;
      case 'ProgramRecord':
        url = `/program/${slug}`
        break;
      case 'ExhibitionRecord':
        url = `/utstallningar/${slug}`
        break;
      case 'NewsRecord':
        url = `/nyheter/${slug}`
        break;
      case 'LocationRecord':
        url = `/platser/${slug}`
        break;
      case 'PartnerRecord':
        url = `/partners/${slug}`
        break;
      default:
        throw Error(`${__typename} is unknown record slug!`)
    }
  }

  return url
}

export const isEmail = (string: string): boolean => {
  if (!string) return false
  const matcher = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (string.length > 320) return false;
  return matcher.test(string);
}

export const truncateParagraph = (s: string, sentances: number = 1, ellipsis: boolean = true, minLength = 200): string => {
  if (!s || s.length < minLength)
    return s;

  let dotIndex = s.split('.')?.slice(0, sentances + 1).join('.').lastIndexOf('.')
  let qIndex = s.split('? ')?.slice(0, sentances + 1).join('? ').lastIndexOf('? ')
  const isQuestion = qIndex !== -1 && qIndex < dotIndex || (dotIndex === -1 && qIndex > -1)

  if (dotIndex === -1 && qIndex === -1) {
    dotIndex = minLength - 1
    ellipsis = true
  }

  let str = s.substring(0, isQuestion ? qIndex : dotIndex) //`${s.substring(0, minLength - 1)}${s.substring(minLength - 1).split('.').slice(0, sentances).join('. ')}`
  return `${str}${ellipsis ? '...' : isQuestion ? '?' : '.'}`;
}

export const isEmptyObject = (obj: any) => Object.keys(obj).filter(k => obj[k] !== undefined).length === 0

export const capitalize = (str: string, lower: boolean = false) => {
  return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
}

export const formatDate = (date: string, endDate?: string) => {
  if (!date) return ''
  const s = capitalize(format(new Date(date), 'dd MMM')).replace('.', '');
  const e = endDate ? capitalize(format(new Date(endDate), 'dd MMM')).replace('.', '') : undefined;
  return `${s}${e ? ` – ${e}` : ''}`
}

export const sleep = (ms: number) => new Promise((resolve, refject) => setTimeout(resolve, ms))

export const apiQueryAll = async (doc: TypedDocumentNode, opt: ApiQueryOptions = {}): Promise<any> => {

  const results = {}
  let size = 100;
  let skip = 0;

  const res = await apiQuery(doc, { variables: { ...opt.variables, first: size, skip } });

  if (res.pagination?.count === undefined)
    throw new Error('Not a pagable query. pagination response missing')

  const { count } = res.pagination

  const mergeProps = (res) => {
    const props = Object.keys(res);

    for (let i = 0; i < props.length; i++) {
      const k = props[i]
      const el = res[props[i]];
      if (Array.isArray(el)) {
        results[k] = !results[k] ? el : results[k].concat(el)
      } else
        results[k] = el;
    }
  }

  const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult =>
    input.status === 'rejected'

  const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> =>
    input.status === 'fulfilled'

  mergeProps(res)

  let reqs = []
  for (let skip = size; skip < count; skip += size) {

    if (reqs.length < 50 && skip + size < count) {
      reqs.push(apiQuery(doc, { variables: { ...opt.variables, first: size, skip } }))
    } else {
      reqs.push(apiQuery(doc, { variables: { ...opt.variables, first: size, skip } }))

      const data = await Promise.allSettled(reqs)
      const error = data.find(isRejected)?.reason

      if (error)
        throw new Error(error)

      for (let x = 0; x < data.length; x++) {
        //@ts-ignore
        mergeProps(data[x].value);
      }
      await sleep(100)
      reqs = []
    }
  }
  return results
}

export const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function getStaticYearPaths(doc: TypedDocumentNode, segment: string) {

  const paths = []

  const years = await allYears()

  for (let i = 0; i < years.length; i++) {
    const { id, title: year } = years[i];
    const res = await apiQueryAll(doc, { variables: { yearId: id } })
    const items = res[Object.keys(res)[0]];
    paths.push.apply(paths, items.map((i) => ({ params: { year, [segment]: i.slug } })))

  }

  return {
    paths,
    fallback: 'blocking',
  };
}

export const translatePath = (href: string, locale: string, defaultLocale: string, year?: string): string => {
  return href;

  const basePath = href.split('/')[1]
  const slug = href.split('/').slice(2).join('/')
  const key = Object.keys(i18nPaths).find(k => [i18nPaths[k].sv, i18nPaths[k].en].includes(basePath))
  const translatedPath = (!basePath || !key) ? '/' : `/${i18nPaths[key][locale]}/${slug}`

  const fullPath = translatedPath ? `${locale !== defaultLocale ? `/${locale}` : ''}${year ? `/${year}` : ''}${translatedPath}` : undefined
  return fullPath;

}

export const allYears = async (): Promise<YearRecord[]> => {
  const { years } = await apiQuery(AllYearsDocument)
  return years;
}

export type TruncateOptions = {
  sentences: number
  useEllipsis: boolean
  minLength: number
}

export const truncateText = (text: string, options: TruncateOptions): string => {
  let { sentences = 1, useEllipsis = false, minLength = 0 } = options;

  // Split the text into sentences
  const sentencesArr = text.match(/[^\.!\?]+[\.!\?]+/g);

  // If there aren't enough sentences, return the full text
  if (!sentencesArr || sentencesArr.length <= sentences) {
    return text;
  }

  // Create the truncated text by joining specified number of sentences
  let truncatedText = sentencesArr.slice(0, sentences).join(' ');

  // Cut off at ! and ? until minimum length is reached
  while (truncatedText.length < minLength && truncatedText.search(/[!?]/) > -1) {
    truncatedText = truncatedText.concat(sentencesArr[sentences].match(/^[^!.?]+[!.?]+/) ? sentencesArr[sentences].match(/^[^!.?]+[!.?]+/)[0] : "");
    sentences++;
  }

  if (useEllipsis) {
    truncatedText += '...';
  }

  return truncatedText;
}


export const truncateWords = (text: string, minLength: number): string => {
  if (text.length <= minLength) {
    return text;
  }
  var truncatedText = text.substr(0, minLength);
  var lastSpaceIndex = truncatedText.lastIndexOf(' ');
  if (lastSpaceIndex !== -1) {
    truncatedText = truncatedText.substr(0, lastSpaceIndex);
  }
  return truncatedText + '...';
}