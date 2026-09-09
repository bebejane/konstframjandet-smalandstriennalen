'use client';

import s from './Menu.module.scss';
import cn from 'classnames';
import { useState, useRef, useEffect } from 'react';
import { type Menu } from '@/lib/menu';
import { Hamburger, Language, MenuTree } from '@/components';
import useStore, { useShallow } from '@/lib/store';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useWindowSize } from 'usehooks-ts';
import useDevice from '@/lib/hooks/useDevice';
import { usePathname } from 'next/navigation';

export type MenuProps = { menu: Menu };

export default function Menu({ menu }: MenuProps) {
	const pathname = usePathname();
	const navRef = useRef<HTMLDivElement | null>(null);
	const treeRef = useRef<HTMLDivElement | null>(null);
	const [showMenu, setShowMenu] = useStore(
		useShallow((state) => [state.showMenu, state.setShowMenu]),
	);
	const [selectedItem, setSelectedItem] = useState<string | null>(null);
	const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo();
	const { width, height } = useWindowSize();
	const { isDesktop, isMobile } = useDevice();

	useEffect(() => {
		return () => {
			!isDesktop && setShowMenu(false);
		};
	}, [pathname]);

	useEffect(() => {
		const footer = document.getElementById('footer');
		if (!footer || !treeRef.current || !navRef.current) return;

		const footerHeight = footer.clientHeight - 1;
		const menuOffset = treeRef.current?.offsetTop;
		const footerScrollPosition =
			scrolledPosition + viewportHeight < documentHeight - footerHeight
				? 0
				: footerHeight - (documentHeight - (scrolledPosition + viewportHeight));
		const menuPadding = isMobile
			? menuOffset + footerScrollPosition
			: footerScrollPosition
				? menuOffset + footerScrollPosition
				: menuOffset;

		treeRef.current.style.maxHeight = `calc(100vh - ${menuPadding}px - 1rem)`;
		navRef.current.style.minHeight = `calc(100vh - ${footerScrollPosition}px - 1px)`;
	}, [scrolledPosition, documentHeight, viewportHeight, width, height, isMobile, selectedItem]);

	useEffect(() => {
		const content = document.getElementById('content');
		if (!content) return;
		content.setAttribute('data-full', String(!showMenu));
	}, [showMenu]);

	return (
		<>
			<Hamburger />
			<nav ref={navRef} className={cn(s.menu, !showMenu && s.hide)}>
				<MenuTree menu={menu} ref={treeRef} onSelect={setSelectedItem} />
			</nav>
		</>
	);
}
