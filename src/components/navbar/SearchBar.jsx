import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searched } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const {search} = useSelector(state => state.filters)
  const match = useMatch('/')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input))

    // if user is not in home should redirect to home page.
    if(!match) {
      navigate('/')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    </form>
  )
}
