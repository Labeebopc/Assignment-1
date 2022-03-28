import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                           
                            <li>
                                <Link to="/" className="home"><span>Home</span></Link> 
                            </li>
                            <li>
                                <Link to="/signin" className="signin"><span>Sign In</span></Link>
                            </li>

                            <li>
                                <Link to="/signup" className="signup"><span>Sign Up</span></Link>
                            </li>
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header