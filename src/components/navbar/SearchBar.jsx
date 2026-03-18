import React from 'react'

export default function SearchBar() {
  return (
    <form>
        <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
        />
    </form>
  )
}
