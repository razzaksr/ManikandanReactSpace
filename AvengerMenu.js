import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';

const AvengerMenu=()=>{
    return(
        <>
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="/" >Avenger MotorCycle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-3 btn btn-outline-dark text-warning badge-pill" 
                        href="/" >Home</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-dark text-warning badge-pill" 
                        href="/versions" >Versions</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-dark text-warning badge-pill" 
                        href="/features" >Features</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-dark text-warning badge-pill" 
                        href="/services" >Services</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-dark text-warning badge-pill" 
                        href="/connect" >Connect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr class="my-7"/>
            {/* <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        Avenger MotorCycle
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mine">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mine">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item active" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill mr-lg-5" 
                                activeClassName="bg-dark text-light" exact to="/" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar-item" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill mr-lg-5" 
                                activeClassName="bg-dark text-light" 
                                exact to="/versions">
                                    Versions
                                </NavLink>
                            </li>
                            <li className="navbar-item" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill mr-lg-5"
                                 activeClassName="bg-dark text-light" 
                                 exact to="/features">
                                    Features
                                 </NavLink>
                            </li>
                            <li className="navbar-item" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill mr-lg-5" 
                                activeClassName="bg-dark text-light" 
                                exact to="/services">
                                    Services
                                </NavLink>
                            </li>
                            <li className="navbar-item" id="menu-gap">
                                <NavLink className="btn btn-outline-dark badge-pill" 
                                activeClassName="bg-dark text-light" 
                                exact to="/connect">
                                    Connect
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    );
}

export default AvengerMenu;