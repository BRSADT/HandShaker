import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./../Estilos/LoginForm.css"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Form from 'react-bootstrap/Form'
import {NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Logo from "./../../Imagenes/Logo.png"

import {Link} from "react-router-dom"


function LoginForm() {
    return (
    <>
<div className="FormContainer">
<Row>
   
    <Col md={{ span: 2, offset: 5 }}  sm={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
<img
        alt=""
        src={Logo}
       
       
      />{' '}

    </Col>
  </Row>


<div class="row justify-content-center">
 
<div class="col-md-4 ">
       
      <form >
        <p className="h2 text-center mb-4">Inicia Sesion en HandShaker</p>
        <div className="grey-text">
          <MDBInput label="Ingresa tu correo u usuario" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Ingresa tu contraseña" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn>Login</MDBBtn>
        </div>
      </form>
      </div>
      </div>
      </div>

</>


      
      );
}

export default LoginForm;