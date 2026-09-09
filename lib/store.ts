import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

export interface StoreState {
	showMenu: boolean;
	showMenuMobile: boolean;
	showSearch: boolean;
	searchQuery: string | undefined;
	images: FileField[] | null;
	imageId?: string | null;
	setShowMenu: (showMenu: boolean) => void;
	setShowMenuMobile: (showMenuMobile: boolean) => void;
	setImages: (images: FileField[] | null) => void;
	setImageId: (imageId: string | null) => void;
	setShowSearch: (showSearch: boolean) => void;
	setSearchQuery: (searchQuery: string) => void;
}

const useStore = create<StoreState>((set) => ({
	showMenu: false,
	showMenuMobile: false,
	showSearch: false,
	searchQuery: undefined,
	images: [],
	imageId: undefined,
	setShowMenu: (showMenu: boolean) =>
		set((state) => ({
			showMenu,
		})),
	setShowMenuMobile: (showMenuMobile: boolean) =>
		set((state) => ({
			showMenuMobile,
		})),
	setImageId: (imageId: string | null) =>
		set((state) => ({
			imageId,
		})),
	setImages: (images: FileField[] | null) =>
		set((state) => ({
			images,
		})),
	setShowSearch: (showSearch: boolean) =>
		set((state) => ({
			showSearch,
		})),
	setSearchQuery: (searchQuery: string) =>
		set((state) => ({
			searchQuery,
		})),
}));

export default useStore;
export { useStore, useShallow };
