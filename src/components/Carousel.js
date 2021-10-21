// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "../assets/css/carousel.css"
import Slider from "react-slick";

function MultipleItems() {
  
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
            <img className="imagensSlide"  src="/img/inspiracoes-foto1.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/inspiracoes-foto2.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/inspiracoes-foto3.png" alt="" />
          </div>
          <div className="containerImagem">
            <img className="imagensSlide" src="/img/inspiracoes-foto4.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/inspiracoes-foto2.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/inspiracoes-foto1.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/inspiracoes-foto3.png" alt="" />
          </div>
          <div className="containerImagem">
            <img className="imagensSlide" src="/img/inspiracoes-foto4.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/inspiracoes-foto2.png" alt="" />
          </div>
          <div className="containerImagem">
             <img className="imagensSlide" src="/img/inspiracoes-foto1.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  
}

export default MultipleItems;