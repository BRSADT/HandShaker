import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";

import {HomeRoute,AboutRoute,ContactRoute,LoginRoute,RegisterRoute,AboutBrenda} from "./FolderWeb/Componentes/pages"

export function Error404(){

  
  return (
    <div> 
      <h1>Page Not found </h1>
      </div> 
  )
}
export default function App() {
  return (
    
      <Router>
         <div>
      <Switch>  
      <Route  path="/about"> 
        <AboutRoute /> 
        </Route>
        <Route  path="/home"> 
        <HomeRoute /> 
        </Route>
        <Route  path="/aboutbrenda"> 
        <AboutBrenda /> 
        </Route>
      <Route  path="/contact"> 
        <ContactRoute /> 
      </Route>
      <Route path="/Login"> 
        <LoginRoute /> 
      </Route>
      <Route exact path="/register"> 
        <RegisterRoute /> 
      </Route>
      <Route path="/*"> 
        <Error404 /> 
      </Route>     
      <Route path="/"> 
        <HomeRoute /> 
      </Route>
      </Switch>
      </div>
    </Router>  
  );
}

