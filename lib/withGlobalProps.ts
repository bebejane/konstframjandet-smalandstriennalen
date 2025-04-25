import { apiQuery, SEOQuery } from "dato-nextjs-utils/api";
import { GetStaticProps, GetServerSideProps, GetStaticPropsContext } from 'next'
import { GlobalDocument, GeneralDocument } from "/graphql";
import type { TypedDocumentNode } from "@apollo/client/core/types.js";
import { buildMenu } from "/lib/menu";
import { allYears } from "/lib/utils";

export default function withGlobalProps(opt: any, callback: Function): GetStaticProps | GetServerSideProps {

  const revalidate: number = parseInt(process.env.REVALIDATE_TIME)
  const queries: TypedDocumentNode[] = [GlobalDocument, GeneralDocument]

  if (opt.query)
    queries.push(opt.query)
  if (opt.queries)
    queries.push.apply(queries, opt.queries)
  if (opt.seo)
    queries.push(SEOQuery(opt.seo))

  return async (context: GetStaticPropsContext) => {

    if (context.params?.year && isNaN(parseInt(context.params?.year as string)))
      return { notFound: true, revalidate };

    const years = await allYears(context.locale)

    //let year = years.find(({ title }) => context.params?.year ? title === context.params?.year : title === years[0].title)
    let year = years.find(({ title }) => context.params?.year ? title === context.params?.year : title === '2023')

    if (!year) {
      return { notFound: true, revalidate };
    }

    year = { ...year, isArchive: year.title !== years[0].title } as YearExtendedRecord

    const variables = queries.map(el => ({ locale: context.locale, yearId: year.id }))
    const props = await apiQuery(queries, { preview: context.preview, variables });
    const messages = (await import(`./i18n/${context.locale}.json`)).default
    //if (year.participantName) {
    // Custom translation for participants
    //messages.Menu.participants = year.participantName
    //messages.BackButton.showAllParticipants = `${messages.BackButton.showAll} ${year.participantName.toLowerCase()}`
    //}

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