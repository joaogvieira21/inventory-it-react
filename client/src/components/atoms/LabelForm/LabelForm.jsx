import React from 'react'
import './LabelForm.css'

export const LabelForm = ({textlabel, forl}) => {
  return (
    
    <label htmlFor={forl}>{textlabel}</label>
    
  )
}


