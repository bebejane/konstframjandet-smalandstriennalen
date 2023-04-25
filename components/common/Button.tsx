import { useEffect, useState } from 'react'
import s from './Button.module.scss'
import cn from 'classnames'
import { randomInt } from '/lib/utils'

export type Props = {
  children: React.ReactNode
  className?: string
}



export default function Button({ className, children }: Props) {

  const generateJagged = () => ({ one: randomInt(2, 10), two: randomInt(30, 40), three: randomInt(10, 15), four: randomInt(10, 40) })
  const [left, setLeft] = useState(generateJagged())
  const [right, setRight] = useState(generateJagged())

  useEffect(() => {
    const interval = setInterval(() => {
      setLeft(generateJagged())
      setRight(generateJagged())
    }, 1000)
    return () => clearInterval(interval)
  }, [])


  return (
    <button className={cn(s.button, className)}>
      <span>{children}</span>
      <svg className={s.left} id="button-left" data-name="button-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.73 44.47">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon className="cls-1" points={`41.73 0 41.73 44.47 ${left.one} ${left.two} ${left.three} 18.03 0 1.72 41.73 0`} />
        </g>
      </svg>
      <svg className={s.right} id="button-left" data-name="button-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.73 44.47">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon className="cls-1" points={`41.73 0 41.73 44.47 ${right.one} ${right.two} ${right.three} 18.03 0 1.72 41.73 0`} />
        </g>
      </svg>
    </button>
  )
}