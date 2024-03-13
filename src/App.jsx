import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Mainpage } from './components/Mainpage'
import { SiComponent } from './components/SiComponent'

export const App = () => {
  return (
   <>
   
   <Routes>
    //* if the path is '/' send the user to main page
    <Route path='/' element={<Mainpage/>}/>
    //* Route for SI table
    <Route path='/si' element={<SiComponent/>}/>


   </Routes>
   
   </>
  )
}
