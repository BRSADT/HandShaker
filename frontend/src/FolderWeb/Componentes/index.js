import React from "react";


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import {Home,About,Contact,Login,Register} from "./FolderWeb/Componentes/pages"

export function Error404(){

  
  return (
    <div> 
      <h1>Page Not found </h1>
      </div> 
  )
}




function index() {
  return (
    <div>
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/*" element={<Error404 />} />
    </Router>
    </div>
  );
}

export default index;