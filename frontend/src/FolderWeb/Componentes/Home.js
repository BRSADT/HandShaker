
import React from 'react';
import Header from "./HeaderHome"
import HomePicture from './HomePicture';
import Footer from './NavBarFooterHome';
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
           <div className="navbarFooter">
           <Footer />
           </div>
        </div>
      );
}

export default Home;