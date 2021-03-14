import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";


import {Home,About,Contact,Login,Register} from "./FolderWeb/Componentes/pages"

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
      
      <Route path="/about"> 
        <About /> 
      </Route>
      <Route path="/contact"> 
        <Contact /> 
      </Route>
      <Route path="/login"> 
        <Login /> 
      </Route>
      <Route path="/register"> 
        <Register /> 
      </Route>
      <Route path="/*"> 
        <Error404 /> 
      </Route>
      <Route path="/"> 
        <Home /> 
      </Route>
      </Switch>

      </div>
      
    </Router>
  
  );
}

