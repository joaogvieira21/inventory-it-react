import React from 'react'
import './MenuItemDropdown.css'
import { useState } from 'react'



export const MenuItemDropdown = ({label, itens}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleHandler = () => {
        if (openMenu==true) {
            setOpenMenu(false)
        } else {
            setOpenMenu(true)
        }
    }
  return (
    <li className="menu-item" onClick={toggleHandler}> {label}
     
      {openMenu && (
         itens.map(item => (
            <li key={item}>{item}</li>
          )) 
      )}
    </li>
  )
}
