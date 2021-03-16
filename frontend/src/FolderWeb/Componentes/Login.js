import React from 'react';
import Header from "./HeaderHome"
import LoginForm from './LoginForm';
import "./../Estilos/login.css"

function Login() {
    return (
        <div>
          <div  className="header">
          <Header />
          </div>
          <LoginForm />
        </div>
      );
}

export default Login;