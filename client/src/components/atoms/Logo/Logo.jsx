import React from 'react'
import './Logo.css'
import logo from '../../../assets/img/logo.png'

export const Logo = () => {

  return (
    <div className="logo" >
        <img src={ logo }  alt="logo"/>
    </div>
  )
}
