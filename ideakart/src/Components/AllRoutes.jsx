import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Contactpage from '../Pages/contact/Contact'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contactpage/>} />
        <Route/>
        <Route/>

    </Routes>
  )
}

export default AllRoutes