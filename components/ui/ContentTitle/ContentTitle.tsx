import React, { FC } from 'react'
import s from './ContentTitle.module.css'

type ContentTitle = {
  title: string
  subtitle: string
}

const ContentTitle = ({ title, subtitle }: ContentTitle) => {
  return (
    <div className="w-full h-40 flex flex-col justify-center items-center p-4 my-4 ">
      <h2 className="text-xl text-center">{title}</h2>
      <br />
      <h3 className="text-center">{subtitle}</h3>
    </div>
  )
}

export default ContentTitle
