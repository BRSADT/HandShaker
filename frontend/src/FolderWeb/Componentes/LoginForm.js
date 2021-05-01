import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./../Estilos/LoginForm.css"
import { MDBInput, MDBBtn } from 'mdbreact';
import { Row, Col} from 'react-bootstrap';
import Logo from "./../../Imagenes/Logo.png"
import {User} from "./../../Classes/User"
import {Worker} from "./../../Classes/Worker"
import {Client} from "./../../Classes/Client"
import {PremiumWorker} from "./../../Classes/PremiumWorker"

const LoginForm =() => {

const [datos, setDatos] = useState({
  Correo: '',
  password: ''
})

const sendData = (event) => {
  
  event.preventDefault()
  console.log('enviando datos...' + datos.Correo + ' ' + datos.password)
  
  
  let userObject= new User(datos.Correo,datos.password)//Login
 
  userObject.Login(userObject).then(res=>{
       if ( res.Response=="1"){
        //the user exist and *userObject has its properties filled.
        console.log("tipo Usuario\t"+ userObject.UserType)// check the user type 
        if(userObject.UserType.includes("Worker")){
          // check if the user is a worker
          let WorkerObject = new Worker(userObject.Email);
          WorkerObject.GetWorkerInformation(WorkerObject).then((res) => {
            //on here WorkerObject has all the information of the user.
            //here you can send it to its corresponding component
            WorkerObject=res;
            console.log(JSON.stringify(res));
          });
        }
        if(userObject.UserType.includes("PremiumWorker")){
          // check if the user is a worker
          let PremiumWorkerObject = new PremiumWorker(userObject.Email);
          PremiumWorkerObject.GetPremiumWorkerInformation(PremiumWorkerObject).then((res) => {
            //on here PremiumWorkerObject has all the information of the user.
            //here you can send it to its corresponding component
            PremiumWorkerObject=res;
            console.log(JSON.stringify(res));
          });
        }
        if(userObject.UserType.includes("Client")){
          // check if the user is a worker
          let ClientObject = new Client(userObject.Email);
          ClientObject.GetClientInformation(ClientObject).then((res) => {
            //on here ClientObject has all the information of the user.
            //here you can send it to its corresponding component
            ClientObject=res;
            console.log(JSON.stringify(res));
          });
        }
      } 
    else{ //there was an error on the login
      if(res.Response=="404")
      console.log("No Existe Usuario")
      if(res.Response=="401")
      console.log("Contrasena incorrecto")
      
    }

  }
  )

/*
  console.log("la respuesta del login es"+ response)
  if(response==1){
console.log("ha entrado");
console.log("Apelliod"+userObject.LastName)

  }else{
console.log("Hubo un error")

  }

*/
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
        <p className="h2 text-center mb-4">Inicia Sesion en HandShaker</p>
        <div className="grey-text">
          <MDBInput label="Ingresa tu correo u usuario" name="Correo" icon="envelope" group type="email" validate error="wrong"
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

export default LoginForm;