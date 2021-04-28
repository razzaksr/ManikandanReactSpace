import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
const BikeMenu=()=>{
    return(
        <>
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="/" >Bajaj Service Log</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-3 btn btn-outline-warning text-primary badge-pill" 
                        href="/" >Home</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-warning text-primary badge-pill" 
                        href="/register" >Register</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-warning text-primary badge-pill" 
                        href="/list" >ListAll</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-warning text-primary badge-pill" 
                        href="/find" >Find</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-warning text-primary badge-pill" 
                        href="/connect" >Connect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default BikeMenu;