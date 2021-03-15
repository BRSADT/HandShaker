import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./../Estilos/HeaderHome.css"
import {NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import LogoName from "./../../Imagenes/HandShakerName.png"


function HeaderHome() {
    return (
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home" id="LogoNameID">
      <img
        alt=""
        src={LogoName}
        height="100%"
       
      />{' '}
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
   
    </Nav>
    <Nav>
      <Nav.Link >Login</Nav.Link>
      <Nav.Link >Registro</Nav.Link>
      <Nav.Link >About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>


      
      );
}

export default HeaderHome;