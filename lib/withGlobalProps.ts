import { apiQuery, SEOQuery } from "dato-nextjs-utils/api";
import { GetStaticProps, GetServerSideProps, GetStaticPropsContext } from 'next'
import { GlobalDocument, FooterDocument } from "/graphql";
import type { TypedDocumentNode } from "@apollo/client/core/types.js";
import { buildMenu } from "/lib/menu";
import { allYears } from "/lib/utils";

export default function withGlobalProps(opt: any, callback: Function): GetStaticProps | GetServerSideProps {

  const revalidate: number = parseInt(process.env.REVALIDATE_TIME)
  const queries: TypedDocumentNode[] = [GlobalDocument, FooterDocument]

  if (opt.query)
    queries.push(opt.query)
  if (opt.queries)
    queries.push.apply(queries, opt.queries)
  if (opt.seo)
    queries.push(SEOQuery(opt.seo))

  return async (context: GetStaticPropsContext) => {

    const years = await allYears()
    let year = years.find(({ title }) => context.params?.year ? title === context.params?.year : title === years[0].title)

    if (!year) {
      return { notFound: true };
    }

    year = { ...year, isArchive: year.title !== years[0].title } as YearExtendedRecord

    const variables = queries.map(el => ({ locale: context.locale, yearId: year.id }))
    const props = await apiQuery(queries, { preview: context.preview, variables });

    let messages = (await import(`./i18n/${context.locale}.json`)).default

    props.year = year
    props.messages = messages;
    props.locale = context.locale
    props.menu = await buildMenu(context.locale)

    if (callback)
      return await callback({ context, props: { ...props }, revalidate });
    else
      return { props: { ...props }, context, revalidate };
  }
}