import React from "react"
import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
				<NavLink end style={({isActive}) => isActive ? activeStyle : null} to="/host">Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/income">Income</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/vans">Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}
