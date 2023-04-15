import React from 'react'
import './MainHeader.css'
import { Logo } from '../../atoms/Logo/Logo'

export const MainHeader = () => {
  return (
    <header>
        <div className="logo-header-container">
            <Logo/>
        </div>
        <div className="profile-header-container">
            
        </div>
    </header>
  )
}
