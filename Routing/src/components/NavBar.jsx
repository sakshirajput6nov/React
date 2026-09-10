import React from 'react'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                {/* <a href="/">Home</a> */}
                {/* this reload a page again */}

                {/* <Link to="/">Home p</Link> */}
                <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
            </li>

        </ul>
        <ul>
            <li>
                {/* <Link to="/About">About p</Link> */}
                 <NavLink to="/About" className={({isActive})=>isActive?"active-link":""}>About</NavLink>
            </li>

        </ul>
        <ul>
            <li>
                {/* <Link to="/Dashboard">Dashboard p</Link> */}
                 <NavLink to="/Dashboard" className={({isActive})=>isActive?"active-link":""}>Dashboard</NavLink>
            </li>

        </ul>
    </div>
  )
}

export default NavBar