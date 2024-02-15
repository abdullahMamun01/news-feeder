import React, { useState } from 'react'
import { ThemeContext } from '../contexts'

const ThemeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider