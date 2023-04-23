import s from './Grid.module.scss'
import React, { useState, useEffect } from 'react'

export default function Grid() {

	const [showGrid, setShowGrid] = useState(false)

	useEffect(() => {
		if (process.env.NODE_ENV === 'production')
			return

		const toggleGrid = ({ key, target }) => {
			if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || key !== 'g')
				return

			if (showGrid) {
				setShowGrid(false)
				const headElement = document.head;
				const styleElement = document.createElement('style');
				styleElement.setAttribute('debug-css', '');
				styleElement.innerText = `* { outline: 1px solid rgb(255, 0, 0);}`;
				const debugElement = headElement.querySelector('[debug-css]');

				if (debugElement)
					debugElement.remove();
				else
					headElement.append(styleElement);

			} else
				setShowGrid(!showGrid)
		}

		document.addEventListener('keydown', toggleGrid)
		return () => document.removeEventListener('keydown', toggleGrid)
	}, [showGrid, setShowGrid])

	if (!showGrid) return null

	return (
		<div className={s.grid}>
			<div className={s.gridWrapper}>

			</div>
		</div>
	)
}