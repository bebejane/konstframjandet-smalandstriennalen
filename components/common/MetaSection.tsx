import s from './MetaSection.module.scss'
import Link from '/components/nav/Link'

export type Props = {
  items: {
    title: string
    value: string
    link?: string
  }[]
}

export default function MetaSection({ items = [] }: Props) {

  items = items.filter(({ value, title }) => value && title)

  if (!items.length) return null

  return (
    <section className={s.meta}>
      <ul className="small">
        {items.map(({ title, value, link }, idx) =>
          <li key={idx}>
            {title}:&nbsp;
            <strong>
              {link ?
                link.startsWith('http') ? <a href={link}>{value} &#8599;</a> : <Link href={link}>{value}</Link>
                :
                <>{value}</>
              }
            </strong>
          </li>
        )}
      </ul>
    </section>
  )
}
