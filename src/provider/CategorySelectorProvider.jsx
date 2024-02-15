
import { useState } from "react"
import { SelectedCategoryContext } from "../contexts"
const CategorySelectorProvider = ({children}) => {
  const [selectedCategory,setSelectedCategory] = useState("")
  return (
    <SelectedCategoryContext.Provider value={{selectedCategory,setSelectedCategory}}>
      {children}
    </SelectedCategoryContext.Provider>
    
  )
}

export default CategorySelectorProvider