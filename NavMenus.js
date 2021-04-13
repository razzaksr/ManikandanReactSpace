import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NavMenus=()=>{
    return(
        <>
            <NavLink activeClassName="bg-dark text-light" exact to="/" >One</NavLink>
            <NavLink activeClassName="bg-dark text-light" exact to="/two">Two</NavLink>
            <NavLink activeClassName="bg-dark text-light" exact to="/three">Three</NavLink>
        </>
    );
}

export default NavMenus;