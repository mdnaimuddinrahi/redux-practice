import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Tags from '../components/tags/Tags'
import VideoGrid from '../components/grid/VideoGrid'
import Footer from '../components/Footer'
import Pagination from '../components/ui/Pagination'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Tags/>
        <VideoGrid/>
        <Pagination/>
        <Footer/>
    </div>
  )
}
