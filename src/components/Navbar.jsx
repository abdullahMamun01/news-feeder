import { useContext } from "react"
import { categories } from "../constants/categories"
import Header from "./Header"
import { SearchContext, SelectedCategoryContext } from "../contexts"


const Navbar = () => {
    const {selectedCategory,setSelectedCategory} = useContext(SelectedCategoryContext)
    const {setSearchNews} = useContext(SearchContext)
    const handleSelect = (item) => {
        setSelectedCategory(item)
        setSearchNews("")
    }

    return (
        <nav className="border-b border-black dark:border-gray-400 py-6 md:py-8">
         <Header/>
            <div className="container mx-auto mt-6">
                <ul
                    className="flex flex-wrap items-center justify-center gap-5 capitalize  text-xs font-semibold lg:text-base"
                >
                    {categories.map((item) => (
                        <li onClick={() => handleSelect(item) } key={item}>
                            <a className={item === selectedCategory ? 'text-[#00d991]' : ''} href="#">{item}</a>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar