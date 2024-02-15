import { useState } from "react"
import { SearchContext } from "../contexts"


const SearchProvider = ({children}) => {
  const [searchNews,setSearchNews] = useState("")
  return (
    <SearchContext.Provider value={{searchNews,setSearchNews}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider