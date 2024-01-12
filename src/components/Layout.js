import { Outlet, Link } from 'react-router-dom';
import React from 'react'

export default function Layout() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Outlet />
        </>
    )
}


