import s from './Loader.module.scss'
import cn from 'classnames'

export type Props = {
  message?: string
  loading?: boolean
  className?: string
  color?: string
  invert?: boolean
  size?: number
}

export default function Loader({ message, loading = true, className, color, invert = false, size = 20 }: Props) {
  if (!loading) return null

  const style = { color }
  return (
    <div className={cn(s.container, className, invert && s.invert)} style={{ maxHeight: `${size}px` }}>

      <div className={s.anim} style={style}>
        <div><span></span><span></span></div>
        <div><span></span><span></span></div>
      </div>
      {message && <div style={style}>{message}</div>}

    </div>
  )
}