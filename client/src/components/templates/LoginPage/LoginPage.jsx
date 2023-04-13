import React from 'react'
import { Logo } from '../../atoms/Logo/Logo'
import { BackgroundLogin } from '../../atoms/BackgroundLogin/BackgroundLogin'
import { LoginForm } from '../../organisms/LoginForm/LoginForm'
import { TitleForm } from '../../atoms/TitleForm/TitleForm'
import './LoginPage.css'



export const LoginPage = () => {
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
