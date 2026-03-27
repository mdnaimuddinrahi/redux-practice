import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
          <Sidebar/>
           <Outlet />
        </div>
    </div>
  )
}
