import React from 'react';
import Header from "./HeaderHome"
import SignUpForm from './SignUpForm';
import "./../Estilos/login.css"

function SignUp() {
    return (
        <div>
          <div  className="header">
          <Header />
          </div>
          <SignUpForm />
        </div>
      );
}

export default SignUp;