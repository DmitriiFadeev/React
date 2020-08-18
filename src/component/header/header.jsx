import React from 'react';
import './header.css'
import logo from './../../img/logo4.jpg'

const Header = () => {
    return (
        <div className="app_header">
            <div className="logo">
                <a href="#"><img src={logo} alt="" /></a>
            </div>
        </div>
    )
}

export default Header;