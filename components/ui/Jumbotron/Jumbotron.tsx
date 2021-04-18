import React, { Component, ReactNode } from 'react'
import Link from 'next/link'
interface Props {
  children?: ReactNode | Component[] | any[]
}

const Jumbotron = ({ children }: Props) => {
  return (
    <div className="w-full mb-10 ">
      <Link href="/search">
        <a className="cursor-pointer">{children}</a>
      </Link>
    </div>
  )
}

export default Jumbotron
