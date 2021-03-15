import React from "react"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./../Estilos/CarouselHome.css"
import Picture from "./../../Imagenes/Picture1.jpg"
import Picture2 from "./../../Imagenes/Picture2.jpg"
import Picture3 from "./../../Imagenes/Picture3.jpg"
import Carousel from 'react-bootstrap/Carousel'

function HomePicture() {
    return (
      
<Carousel id="ClassCarousel">
  <Carousel.Item interval={1000} className="ClassItemCarousel">
  <div id="Fondo3"  className="d-block w-100">


</div>
    <Carousel.Caption>
      <h1>A un click de distancia</h1>
      <h3>Encuentra variedad de opciones</h3>
      <Button variant="dark" size="lg" >Ver más</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000} className="ClassItemCarousel">
    
    <div id="Fondo1"  className="d-block w-100">


    </div>
    <Carousel.Caption>
    <h1>A un click de distancia</h1>
    <h3>Encuentra variedad de opciones</h3>
    <Button variant="dark" size="lg" >Ver más</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000} className="ClassItemCarousel"> 
  <div id="Fondo2"  className="d-block w-100">


</div>
    <Carousel.Caption>
    <h1>A un click de distancia</h1>
    <h3>Encuentra variedad de opciones</h3>
    <Button variant="dark" size="lg" >Ver más</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>      
      );
}

export default  HomePicture;

