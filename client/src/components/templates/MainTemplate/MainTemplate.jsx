import React from 'react'
import { useState, useContext } from 'react'
import './MainTemplate.css'
import { MainHeader } from '../../organisms/MainHeader/MainHeader'  
import { SidebarMenu } from '../../organisms/SidebarMenu/SidebarMenu'
import { InputSearchMenu } from '../../atoms/InputSearchMenu/InputSearchMenu'
import { Dashboard } from '../../../../pages/Dashboard'
import { MenuItem } from '../../atoms/MenuItem/MenuItem'
import { MenuItemDropdown } from '../../atoms/MenuItemDropdown/MenuItemDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-solid-svg-icons'

const SidebarContext = React.createContext();



export const MainTemplate = () => {
  const equipamentos = ['Desktop', 'Notebook', 'Impressora']
  


  return (
        <>
          <MainHeader/>
          <div className="teste">
            <div className="sidebar">
              <InputSearchMenu/>
              <nav>
                <ul>
                  <MenuItem label="Dashboard" icone="faBarChart"/>
                  <MenuItemDropdown label="Equipamentos" itens={equipamentos}/>
                  <MenuItem label="Mapa"/>
                </ul>
              </nav>
            </div>
            <div className="texto">
              <h1>teste</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae doloremque reprehenderit quis neque? Vero repellat distinctio obcaecati eius tempore porro vel sequi impedit, laborum assumenda magnam minus quisquam magni.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae doloremque reprehenderit quis neque? Vero repellat distinctio obcaecati eius tempore porro vel sequi impedit, laborum assumenda magnam minus quisquam magni.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae doloremque reprehenderit quis</p>
            </div>
          </div>
    
    </>
  )
}
