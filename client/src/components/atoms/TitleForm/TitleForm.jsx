import React from 'react'
import './TitleForm.css'

export const TitleForm = ({title}) => {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{ title }</h2>
  )
}
