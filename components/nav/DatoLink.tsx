import Link from './Link'
import { recordToSlug } from '/lib/utils'

export type Props = {
  link: ExternalLinkRecord | (InternalLinkRecord & { internalTitle: String }) | any
  className?: string
  children?: React.ReactNode
}

export default function DatoLink({ link, className, children }: Props) {

  if (!link)
    return <a className={className}>{children}</a>

  const slug = link.__typename === 'ExternalLinkRecord' ? link.url : recordToSlug(link.record)
  const title = link.__typename === 'ExternalLinkRecord' ? link.title : link.internalTitle || (link.record.__typename === 'ParticipantRecord' ? link.record.name : link.record.title)

  return (
    link.__typename === 'ExternalLinkRecord' ?
      <a href={slug} className={className}>{children ?? title}</a>
      :
      <Link href={slug} className={className}>{children ?? title}</Link>
  )

}