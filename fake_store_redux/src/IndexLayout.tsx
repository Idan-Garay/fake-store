import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

const IndexLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default IndexLayout