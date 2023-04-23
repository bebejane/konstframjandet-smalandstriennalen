import s from './Layout.module.scss'
import React, { useEffect, useState } from 'react'
import { Content, Footer, Grid, Menu, Language, FullscreenGallery } from '/components'
import type { MenuItem } from '/lib/menu'
import { buildMenu } from '/lib/menu'
import { useRouter } from 'next/router'
import { useStore } from '/lib/store'
import { usePage } from '/lib/context/page'
import { Image } from 'react-datocms'
import { randomInt } from '/lib/utils'

export type LayoutProps = {
	children: React.ReactNode,
	menu: MenuItem[],
	footer: GeneralRecord
	title: string
}

export default function Layout({ children, menu: menuFromProps, footer, title }: LayoutProps) {

	const router = useRouter()
	const { year, section } = usePage()
	const [menu, setMenu] = useState(menuFromProps)
	const [images, imageId, setImageId] = useStore((state) => [state.images, state.imageId, state.setImageId])
	const backgroundImage = year?.background?.[randomInt(0, year?.background.length - 1)];
	const showBackground = backgroundImage && !year?.isArchive && section !== 'archive'

	useEffect(() => { // Refresh menu on load.
		buildMenu(router.locale).then(res => setMenu(res)).catch(err => console.error(err))
	}, [router.locale])

	useEffect(() => {
		document.body.style.backgroundColor = year?.isArchive || section === 'archive' ? 'var(--archive)' : 'var(--white)'
	}, [router.asPath, year, section])

	if (!menuFromProps || !footer) return null

	return (
		<>
			{showBackground && backgroundImage &&
				<div className={s.background}>
					<Image data={backgroundImage.responsiveImage} className={s.image} />
				</div>
			}
			<div className={s.layout}>
				<Content menu={menu}>
					{children}
				</Content>
			</div>
			<Menu items={menu} />
			<Language menu={menu} />
			<Footer menu={menu} footer={footer} />
			<FullscreenGallery
				index={images?.findIndex((image) => image?.id === imageId)}
				images={images}
				show={imageId !== undefined}
				onClose={() => setImageId(undefined)}
			/>
			<Grid />
		</>
	)
}