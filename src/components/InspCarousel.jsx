// import  Swiper  from 'Swiper/React';
// import SwiperSlide from 'Swiper/React';
// Import Swiper styles
import '../assets/css/swiper.css';
import logo from "../assets/img/inspiracoes-icon-overLoop-logopreto.png";

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
//     import './swiper.css';

function Carrossel() {
    
    return (
        <>
        <Carousel>
            <div>
                <img src={logo} />
                <p >Legend 1</p>
            </div>
            <div>
                <img src={logo} />
                <p >Legend 2</p>
            </div>
            <div>
                <img src={logo} />
                <p >Legend 3</p>
            </div>
        </Carousel>
        </>
    );
     
  
}

export default Carrossel;