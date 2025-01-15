import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function AuthRequired() {
    const authenticated = true
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!authenticated) {
        return (
            <Navigate
                to="/login"
                state={{message: "You must log in first"}}
				replace
            />)
    }
    return <Outlet />
}
