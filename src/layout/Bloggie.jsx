import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/Home'
import Details from '../pages/Details'
import GoHomeLink from '../components/ui/GoHomeLink'

export default function Bloggie() {
  return (
    <BrowserRouter>
      <Navbar />
      <GoHomeLink />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs/:blogId' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}