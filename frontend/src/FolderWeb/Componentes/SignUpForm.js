import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
//import "./../Estilos/SignUpForm.less"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Logo from "./../../Imagenes/Logo.png"
import {User} from "./../../Classes/User"
import UploadProfilePicture from "./UploadProfilePicture"


const SignUpForm =() => {

const [datos, setDatos] = useState({
  Correo: '',
  password: ''
})

const sendData = (event) => {
  
  event.preventDefault()
  console.log('enviando datos...' + datos.Correo + ' ' + datos.password)
  
  
  let userObject= new User(datos.Correo,datos.password)

  axios.post('http://localhost:3001/api/user/Login',{userObject})
  .then(res=>{
    let user=res.data
    console.log(user.Name)
    console.log(user.Email)
    console.log(user.Phones)
    user.Phones.forEach(phone => {
      console.log("descripcion "+phone.Description);
        console.log("numero "+phone.Phone);
    });
 
  }
)
.catch(error => {
  console.log(error.response.data.error)
})
}

const handleInputChange = (event) => {
  
  setDatos({
    ...datos,
     [event.target.name] : event.target.value
  })
}


    return (
    <>
<div className="FormContainer">
<Row>

    <Col  md={{ span: 2, offset: 5 }}  sm={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
<img
        alt=""
        src={Logo}
       
       
      />{' '}

    </Col>
  </Row>


<div class="row justify-content-center">
 
<div class="col-md-4 ">
       
      <form  onSubmit={sendData}>
        <p className="h2 text-center mb-4">Registrarse en HandShaker</p>

        <React.Fragment>
    <UploadProfilePicture/>
  </React.Fragment>
        
        <div className="grey-text">
        <MDBInput label="Ingrese su nombre" name="Name" icon="envelope" group type="Name" validate error="wrong"
            success="right"    onChange={handleInputChange} />
        <MDBInput label="Ingrese sus apellidos" name="LastName" icon="envelope" group type="LastName" validate error="wrong"
            success="right"    onChange={handleInputChange} />

        <MDBInput label="Ingrese su correo electronico" name="Email" icon="envelope" group type="Email" validate error="wrong"
            success="right"    onChange={handleInputChange} />
        <MDBInput label="Ingresa tu contraseña" icon="lock" name="password" group type="password" validate    onChange={handleInputChange} />
        </div>
        <div className="text-center">
          <MDBBtn type="submit" >Login</MDBBtn>
    
        </div>
      </form>
      </div>
      </div>
      </div>

</>


      
      );
}

export default SignUpForm;