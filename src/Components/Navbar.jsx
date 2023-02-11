import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div><h1>React Books App</h1></div>
        <Link to="/favorites"><h3>Your Favorites</h3></Link>
        {/* <div><p>BookList</p></div> */}
    </div>
  )
}

export default Navbar