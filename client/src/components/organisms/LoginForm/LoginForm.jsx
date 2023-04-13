import React from 'react'
import { InputLabelForm } from '../../molecules/InputLabelForm/InputLabelForm'
import { SubmitForm } from '../../atoms/SubmitForm/SubmitForm'
import { ForgetPassword } from '../../atoms/ForgetPassword/ForgetPassword'
import { LoginMsg } from '../../atoms/LoginMsg/LoginMsg'
import { login } from '../../../../api/auth.js'
import { useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {
  const [msg, setMsg] = useState("")
  const [msgColor, setMsgColor] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const userLogin = {
        email : email,
        password: password
      }
      const res = await login(userLogin)
      setMsgColor('green')
      setMsg('Usuário Autorizado.')
    } catch (err) {
      console.log(err.response.data.message)
      setMsgColor('red')
      setMsg(err.response.data.message)     
    }
    e.target.email.value = ""
    e.target.password.value = "" 
  }



  return (
    <>
    <LoginMsg msg={msg} msgColor={msgColor}/>
    <form onSubmit={handleSubmit}>
        <InputLabelForm textlabel="E-mail" forl="email" type="email" name="email" id="email"/>
        <InputLabelForm textlabel="Senha" forl="password" type="password" name="password" id="password"/>
        <ForgetPassword/>
        <SubmitForm type="submit"/>
    </form>
    </>
  )
}
