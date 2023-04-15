import React from 'react'
import { Logo } from '../../atoms/Logo/Logo'
import { BackgroundLogin } from '../../atoms/BackgroundLogin/BackgroundLogin'
import { LoginForm } from '../../organisms/LoginForm/LoginForm'
import { TitleForm } from '../../atoms/TitleForm/TitleForm'
import './LoginTemplate.css'



export const LoginTemplate = () => {
  return (
    <section className="page-container">
        <div className="login-area">
           <Logo/>
           <TitleForm  title="Acesse sua conta"/>
           <LoginForm/>
        </div>
        <BackgroundLogin></BackgroundLogin>
    </section>
  )
}
