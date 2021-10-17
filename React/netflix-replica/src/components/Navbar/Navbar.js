import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    render() {
        return(
        <nav 
        className="Nav">
            <h1>
                GetFlix
            </h1>
            <ul  
            className="NavItems">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.link} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        )
    }
}

export default Navbar;