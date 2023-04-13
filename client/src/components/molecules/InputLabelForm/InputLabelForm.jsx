import React from 'react'
import './InputLabelForm.css'
import { InputForm } from '../../atoms/InputForm/InputForm'
import { LabelForm } from '../../atoms/LabelForm/LabelForm'

export const InputLabelForm = ({textlabel, forl, type, name}) => {
    
  return (
    <div className="input-group">
        <LabelForm textlabel={textlabel} forl={forl}/>
        <InputForm type={type} name={name}/>
    </div>
  )
}
