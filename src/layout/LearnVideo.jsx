import React from 'react'
import Home from '../pages/Home'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import Video from '../pages/Video'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function LearnVideo() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/videos/:videoId' element={<Video/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
//  -- {* <Home/> *} --