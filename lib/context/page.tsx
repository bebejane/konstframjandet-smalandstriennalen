import { useContext, createContext } from "react";

const initialState: PageProps = {
  year: undefined,
  title: undefined,
  isHome: false,
  section: 'home'
}

export const PageContext = createContext(initialState);

export type PageProviderProps = {
  children: React.ReactElement,
  value: PageProps
}

// Context provider
export const PageProvider = ({ children, value }: PageProviderProps) => {

  return (
    <PageContext.Provider value={{
      ...initialState,
      ...value
    }}>
      {children}
    </PageContext.Provider>
  )
};
// usePage hook
export const usePage = (): PageProps => {
  return useContext(PageContext)
}
