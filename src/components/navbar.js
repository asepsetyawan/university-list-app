import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../middleware/auth'

import {LOGIN_URL, REGISTER_URL, SUBSCRIBE_URL} from '../url'

const Navbar = () => {

    const { isLogin } = useAuth()

    const handleLogout = () => localStorage.setItem('user-token', '')

    return (
        <header>
            <a href="/" className="logo">University List App</a>
            <Link to="/" className="button desktop">Home</Link>
            <Link to={SUBSCRIBE_URL} className="button desktop">Subscribe</Link>
            {
                isLogin ? 
                    <a href="/" className="button desktop" onClick={handleLogout}>Logout</a> : 
                    <>
                        <Link to={LOGIN_URL} className="button desktop">Login</Link>
                        <Link to={REGISTER_URL} className="button desktop">Register</Link>
                    </>
            }

            <label htmlFor="drawer-control" className="mobile drawer-toggle" />
            <input type="checkbox" id="drawer-control" className="drawer persistent" />
            <div className="drawer">
                <label htmlFor="drawer-control" className="drawer-close" />
                <Link to="/" className="mobile">Home</Link>
                <Link to={SUBSCRIBE_URL} className="mobile">Subscribe</Link>
                {
                    isLogin ? 
                        <a href="/" className="mobile" onClick={handleLogout}>Logout</a> : 
                        <>
                            <Link to={LOGIN_URL} className="mobile">Login</Link>
                            <Link to={REGISTER_URL} className="mobile">Register</Link>
                        </>
                }
            </div>  
        </header>
    )
}

export default Navbar