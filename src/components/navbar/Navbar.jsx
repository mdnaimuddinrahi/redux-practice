import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link to={"/"}>
                    <img
                        className="h-10"
                        src="./assets/lws.svg"
                        alt="PC Builder Bangladesh"
                    />
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    <SearchBar/>
                    <img
                        className="inline h-4 cursor-pointer"
                        src="./assets/search.svg"
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
  )
}
