import React from 'react'
import Navbar from './components/Navbar'
import Poroduct from './components/Product'
import Footer from './components/Footer'
import {Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Poroduct/>}/>
        <Route path='/prduct/:id'  element={' '}/>
        <Route path='/*'  element={<h1>404 Page Not Found</h1>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App