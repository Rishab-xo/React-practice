import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

 export const ThemeDataContext = createContext()

const ThemeContext = () => {

const [theme, setTheme] = useState('light')

  return (
    <div>
      <ThemeDataContext.Provider value={theme,setTheme}>

      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext