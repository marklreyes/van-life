import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

	function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

	return (
	  <header>
		<Link className="site-logo" to="/">#VanLife</Link>
		<nav>
			<NavLink className={({isActive}) => isActive ? "active-link" : null} to="host">Host</NavLink>
			<NavLink className={({isActive}) => isActive ? "active-link" : null} to="about">About</NavLink>
			<NavLink className={({isActive}) => isActive ? "active-link" : null} to="vans">Vans</NavLink>
			<Link to="login" className="login-link">
				<img
					src="../assets/images/avatar-icon.png"
					className="login-icon"
				/>
            </Link>
			<button onClick={fakeLogOut}>X</button>
		</nav>
	  </header>
	)
}
