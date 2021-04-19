import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NavMenus=()=>{
    return(
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand"><img style={{height:'80px',width:'150px'}} src="images/logo.png"/></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mine">
                    <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="mine">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item active" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill mr-lg-5" activeClassName="bg-dark text-light" exact to="/" >One</NavLink>
                            </li>
                            <li className="navbar-item" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill mr-lg-5" activeClassName="bg-dark text-light" exact to="/two">Two</NavLink>
                            </li>
                            <li className="navbar-item" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill" activeClassName="bg-dark text-light" exact to="/three">Three</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavMenus;