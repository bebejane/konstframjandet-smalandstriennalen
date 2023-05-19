import s from './MetaSection.module.scss'
import Link from '/components/nav/Link'

export type Props = {
  items: {
    title: string
    value: string | string[]
    link?: string | string[]
  }[]
}

export default function MetaSection({ items = [] }: Props) {

  items = items.filter(({ value, title }) => (value && title))

  if (!items.length) return null

  return (
    <section className={s.meta}>
      <ul className="small">
        {items.map(({ title, value, link }, idx) => {

          const values = !Array.isArray(value) && value ? [value] : value || []
          const links = (!Array.isArray(link) && link ? [link] : link || []) as Array<string>

          return (
            <li key={idx}>
              {title}:&nbsp;
              <strong>
                {links.length > 0 ?
                  links.map((link, idx) =>
                    link.startsWith('http') ?
                      <a href={link}>{values[idx]} &#8599;</a>
                      :
                      <Link href={link}>{values[idx]}</Link>
                    //@ts-ignore
                  ).reduce((prev, curr) => [prev, ', ', curr])
                  :
                  values.length > 1 && Array.isArray(values) ? values.join(', ') : <>{value}</>
                }
              </strong>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
