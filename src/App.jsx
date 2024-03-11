import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Mainpage } from './components/Mainpage'
import { SiComponent } from './components/SiComponent'

export const App = () => {
  return (
   <>
   
   <Routes>
    
    <Route path='/' element={<Mainpage/>}/>
    
    <Route path='/si' element={<SiComponent/>}/>


   </Routes>
   
   </>
  )
}
