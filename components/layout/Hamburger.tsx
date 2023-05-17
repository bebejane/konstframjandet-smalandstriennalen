import s from './Hamburger.module.scss'
import cn from 'classnames'
import React, { useState, useEffect, useRef } from 'react'
import useStore from '/lib/store'
import { usePage } from '/lib/context/page'

export default function Hamburger() {

  const { isHome } = usePage()
  const [showMenu, setShowMenu] = useStore((state) => [state.showMenu, state.setShowMenu])
  const [key, setKey] = useState(Math.random())
  const [init, setInit] = useState(false)
  const handleClick = (e) => {
    setInit(true)
    setShowMenu(!showMenu)
    setKey(Math.random())
    e.stopPropagation();
  }

  return (
    <div className={cn(s.hamburger, isHome && !showMenu && s.home)} onClick={handleClick}>
      <div className={s.wrap}>
        {new Array(3).fill(0).map((_, i) =>
          <div
            id={`l${i + 1}`}
            key={`${key}-${i + 1}`}
            className={cn(init && s.init, !showMenu ? s.opened : s.closed)}
          ></div>
        )}
      </div>
    </div>
  )
}
