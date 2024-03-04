import React from 'react'
import {Routes, Route } from 'react-router-dom'

import CalcLightDark from '../components/featured/CalcLightDark'

const allRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<CalcLightDark/>}/>
    
   </Routes>
   
   </>
  )
}

export default allRoutes