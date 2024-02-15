
import CategorySelectorProvider from "./CategorySelectorProvider"
import SearchProvider from "./SearchProvider"
import ThemeProvider from "./ThemeProvider"


function AppContextProvider({ children }) {
  return (
    <ThemeProvider>
      <CategorySelectorProvider>
        <SearchProvider>
          {children}
        </SearchProvider>
      </CategorySelectorProvider>
    </ThemeProvider>
  )
}

export default AppContextProvider