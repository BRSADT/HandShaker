import React from "react";
import Navbar from "react-bootstrap/Navbar";
import FigureCaption from "react-bootstrap/FigureCaption";
import FigureImage from "react-bootstrap/FigureImage";
import Figure from "react-bootstrap/Figure";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Estilos/NavBarFooterHome.css";

import {
  NavDropdown,
  MenuItem,
  Tabs,
  ButtonToolbar,
  Button,
  Table,
  ButtonGroup,
  Row,
  Col,
  Grid,
  Panel,
  FormGroup,
  FormControl,
} from "react-bootstrap";

function NavBarFooterHome() {
  return (
    <>
      <Nav className="justify-content-center First" activeKey="/home">
        <Nav.Item>
          <h1>Categorías</h1>
        </Nav.Item>
      </Nav>
      <p class="one"></p>
      <Nav className="justify-content-center Second" activeKey="/home">
     
      </Nav>
    </>
  );
}

export default NavBarFooterHome;
