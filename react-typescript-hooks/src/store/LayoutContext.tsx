import React, { useState, createContext } from 'react'

const LayoutContext = createContext({})

export const LayoutProvider = (props: { children: React.ReactNode }) => {
  const [asideMenu, setAsideMenu] = useState([])
  return <LayoutContext.Provider value={ {asideMenu, setAsideMenu} }>
    {props.children}
  </LayoutContext.Provider>
}

export default LayoutContext