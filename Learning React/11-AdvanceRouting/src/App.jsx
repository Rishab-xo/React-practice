import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import NotFound from './Pages/NotFound';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Courses from './Pages/Courses';
import CourseDetails from './Pages/CourseDetails';

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:courseId' element={<CourseDetails/>}/>

      <Route path='/Product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        </Route>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App