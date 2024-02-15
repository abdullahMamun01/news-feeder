import Logo from '../assets/logo.png'
import LwsLightLogo from'../assets/logo_light.png'
import SearchIcon from '../assets/icons/search.svg'
import LigthSearch from '../assets/icons/light-search.svg'

import SearchBox from './SearchBox';
import { useContext, useState } from 'react';
import { SearchContext, ThemeContext } from '../contexts';
import { getDateFormate } from '../utils/getTimeFormate';
import IconWorld from '../assets/icons/world.svg'
import Light from '../assets/icons/light.svg'
import Dark from '../assets/icons/dark.svg'

const Header = () => {
    const [show, setShow] = useState(false)
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const { setSearchNews } = useContext(SearchContext)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchNews('sports')
    }
    return (
        <div
            className="container mx-auto flex flex-wrap items-center justify-between gap-6"
        >
            <div className="flex items-center space-x-4">
                <img src={IconWorld} alt="" />
                <span>{getDateFormate(new Date())}</span>
            </div>

            <a href="/">
                <img
                    className="max-w-[100px] md:max-w-[165px]"
                    src={darkMode ? LwsLightLogo : Logo}
                    alt="Lws"
                />
            </a>

            <div className="flex items-center space-x-3 lg:space-x-8 cursor-pointer">
                {show && <SearchBox onSearch={handleSearch} />}
                <img onClick={() => setShow(!show)} src={darkMode ? LigthSearch : SearchIcon} />
                <a onClick={() => setDarkMode(darkMode => !darkMode)} href="#" className=" backdrop-blur-[2px] p-1 inline-block">

                    <img src={darkMode ? Light : Dark} width="24" height="24" alt="theme-icon" />
                </a>
            </div>
        </div>
    )
}

export default Header