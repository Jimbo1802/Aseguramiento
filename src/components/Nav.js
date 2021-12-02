import React from 'react'
import {Link} from "react-router-dom";


import Logo_Tienda from './svg/logo.png'
import './css/Nav2.css'
class Nav extends React.Component {
    render(){
        return (
            <React.Fragment>
            <navbar className="navbar">
                <div className="navbar-logo">
                    <h1><Link to="/"><img src={Logo_Tienda} alt=""/></Link></h1>
                </div>
                <ul className="nav-item">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Productos</Link></li>
                    <li><Link to="/regAPerson">Cliente</Link></li>
                    <li><Link to="/regAVendedor">Vendedor</Link></li>
                    <li><Link to="/regAProduct">Producto</Link></li>
                    <li><Link to="/regALocal">Local</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                        
                </ul>
            </navbar>
            
            </React.Fragment>
            
        );
    }
}
export default Nav;

