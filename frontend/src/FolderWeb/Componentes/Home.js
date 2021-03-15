
import React from 'react';
import Header from "./Header"
import HomePicture from './HomePicture';
import "./../Estilos/Home.css"

function Home() {
    return (
        <div >
            <div className="navbarC" >
           <Header />
           </div>
           <div className="Carousel" >
           <HomePicture />
           </div>
        </div>
      );
}

export default Home;