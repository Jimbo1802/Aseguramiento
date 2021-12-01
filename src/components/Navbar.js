import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Logo_Tienda from './svg/logo.png'
import './css/Navbar.css'
import {navItems} from "./NavItems";
import Button from './Button';
import Dropdown from './Dropdown';
function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav className="navbar">
            
            <div className="navbar-logo">
                <h1><Link to="/"><img src={Logo_Tienda} alt=""/></Link></h1>
            </div>
            
            <ul className="nav-items">
                {navItems.map((item) => {
                    {console.log(item.title)}
                    if (item.title === "Client" || item.title === "Vendor" || item.title === "Seller") {
                        return (
                            <li
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setDropdown(true)}
                                onMouseLeave={() => setDropdown(false)}
                            >
                                <Link to={item.path}>{item.title}</Link>
                                {dropdown && <Dropdown title={item.title}/>}
                            </li>
                        );
                    }
                    
                    return (
                        <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
            <Button />
            
        </nav>
        
    )
}

export default Navbar
