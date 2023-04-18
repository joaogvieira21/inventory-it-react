import React from 'react'
import './MenuItemDropdown.css'
import { useState } from 'react'



export const MenuItemDropdown = ({label, itens}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [color, setColor] = useState("")
    const [bg, setBg] = useState("")
    const toggleHandler = (e) => {
        if (openMenu==true && e.target.tagName === "UL") {
            setOpenMenu(false)
            setBg("")
            setColor("")
        } else {
           setBg("rgb(27, 25, 25)")
           setColor("white")
            setOpenMenu(true)
        }
    }
  return (
    <ul className="menu-item" style={{ backgroundColor: bg, color: color}} onClick={toggleHandler}> {label}
      {openMenu && (
         itens.map(item => (
            <li key={item} className="submenu" onClick={()=> {
              alert("teste")
            }}>{item}</li>
          )) 
      )}
    </ul>
  )
}
