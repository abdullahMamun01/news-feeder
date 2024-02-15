import { useContext, useState } from "react"
import useDebounce from "../hooks/useDebounce"
import { SearchContext } from "../contexts"


const SearchBox = () => {
    const {setSearchNews} = useContext(SearchContext)
    const debounceCb = useDebounce((searchTerm) => {
        setSearchNews(searchTerm)
    } , 500 )
    const handleSearch = (e) => {
        const value  = e.target.value
        debounceCb(value)
    }
    return (
        <form className="animate-slideIn duration-300" >
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative  ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 dark:text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#00d991] focus:border-[#00d991]  focus:outline-none  dark:text-white dark:focus:ring-[#00d991] dark:focus:border-[#00d991]"
                    placeholder="Search News..."
                    onChange={handleSearch}
                    required
                />
            
            </div>
        </form>
    )
}

export default SearchBox