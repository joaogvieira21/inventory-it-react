import React from 'react'
import './LoginMsg.css'

export const LoginMsg = ({ msgColor , msg}) => {
  return (
    <p className="msg"  style={{color : msgColor }} > { msg } </p>
  )
}
