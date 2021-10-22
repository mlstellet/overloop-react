import "../assets/css/carousel.css"
import Slider from "react-slick";


export default function SlideT() {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
      <div className="containerzao">
          
        <Slider {...settings}>
          <div className="containerImagem">
            <img className="imagensSlide"  src="/img/home-slider1.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/home-slider2.jpg" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/home-slider3.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  
}