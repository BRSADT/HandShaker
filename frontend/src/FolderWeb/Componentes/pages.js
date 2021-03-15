import React from "react";
import Login from "./Login"
import Home from "./Home"


export function HomeRoute() {
  return (
    <React.Fragment>
    <Home />
  </React.Fragment>
  );
}

export function AboutRoute() {
  return (
    <div>
      <h1>Pagina About 1 a en creacion</h1>
    </div>
  );
}

export function AboutBrenda() {
  return (
    <div>
      <h1>Pagina About brenda en creacion</h1>
    </div>
  );
}

export function ContactRoute() {
  return (
    <div>
      <h1>Pagina Contacto en creacion</h1>
    </div>
  );
}
export function LoginRoute() {
  return (
    <div>
      <React.Fragment>
    <Login />
  </React.Fragment>
    </div>
 
  );
}
export function  RegisterRoute() {
  return (
    <div>
      <h1>Pagina Registro en creacion</h1>
    </div>
  );
}
