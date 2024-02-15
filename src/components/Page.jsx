import React, { useContext } from 'react'
import { ThemeContext } from '../contexts'
import Navbar from '../components//Navbar'
import NewsFeed from './news/NewsFeed'
import Footer from './Footer'

const Page = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={`h-full w-full  ${darkMode ? "dark" : "transition-colors duration-300 ease-in-out"}`}>
            <Navbar />
            <NewsFeed />
            <Footer />
        </div>
    )
}

export default Page