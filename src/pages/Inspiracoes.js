import Banner from "../components/Banner";
import CardFounders from "../components/CardFounders";
import css from "../assets/css/inspiracoes.module.css";
import Button from "../components/Button";
import Noticias from "../components/noticias";
import logo from "../assets/img/inspiracoes-icon-overLoop-logopreto.png";
import Footer from "../components/Footer";
import Carrossel from "../components/InspCarousel";
import Slider from "react-slick";
import "../assets/css/carousel.css";

const founders = [
  {
    name: "Maria Luiza",
    role: "Estagiária de Engenharia",
    avatar: "/img/inspiracoes-fotomaria.png",
    social_icons: {
      face: "",
      twitter: "https://twitter.com/mlstellet",
      linkedin: "https://www.linkedin.com/in/mlstellet/",
      insta: "",
    },
  },
  {
    name: "Amanda Maria",
    role: "Estagiária de Engenharia",
    avatar: "/img/inspiracoes-fotoamanda.png",
    social_icons: {
      face: "",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/amanda-maria/",
      insta: "https://www.instagram.com/amanda_yosh/",
    },
  },
  {
    name: "Tais Bruno",
    role: "Estagiária de Engenharia",
    avatar: "/img/inspiracoes-fototais.png",
    social_icons: {
      face: "https://www.facebook.com/tais.bruno1",
      twitter: "https://twitter.com/taisbruno",
      linkedin: "https://www.linkedin.com/in/taisbruno",
      insta: "https://www.instagram.com/taisbruno/",
    },
  },
  {
    name: "Khiara Shantala",
    role: "Estagiária de Engenharia",
    avatar: "/img/inspiracoes-fotokhiara.png",
    social_icons: {
      face: "https://facebook.com/khiara00",
      twitter: "https://twitter.com/KhiaraShantala",
      linkedin:
        "https://www.linkedin.com/in/khiara-shantala-oliveira-faria-91710a197",
      insta: "https://www.instagram.com/khiara.shantala/",
    },
  },
];

const profissionals = {
  primeiro : {
    
    array: [
      {
      area: "Ciência de Dados",
      name: "Carol Seixas",
      lado:"true",
      role: "Estagiária",
      avatar: "/img/inspiracoes-foto1.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
    },
    {
      area: "Internet das Coisas",
      name: "Beatriz da Silva",
      role: "Gerente de Projetos",
      avatar: "/img/inspiracoes-foto2.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
    },
    {
      area: "Cybersegurança ",
      name: "Valentina Aurora",
      role: "Analista Sênior de Segurança",
      avatar: "/img/inspiracoes-foto3.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
    }
    ],
  },
  segundo : {
    
    array :[
      {
        area: "Internet das Coisas",
        name: "Beatriz da Silva",
        lado:"false",
        role: "Gerente de Projetos",
        avatar: "/img/inspiracoes-foto2.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
      },
      {
        area: "Cybersegurança ",
        name: "Valentina Aurora",
        lado:"false",
        role: "Analista Sênior de Segurança",
        avatar: "/img/inspiracoes-foto3.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
      },
      {
        area: "Ciência de Dados",
        name: "Carol Seixas",
        lado:"false",
        role: "Estagiária",
        avatar: "/img/inspiracoes-foto1.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
      },
    ],
  },
  terceiro: {
    
    array:[
      {
        area: "Cybersegurança ",
        name: "Valentina Aurora",
        lado: "true",
        role: "Analista Sênior de Segurança",
        avatar: "/img/inspiracoes-foto3.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
      },
      {
        area: "Ciência de Dados",
        name: "Carol Seixas",
        lado: "true",
        role: "Estagiária",
        avatar: "/img/inspiracoes-foto1.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
      },
      {
        area: "Internet das Coisas",
        name: "Beatriz da Silva",
        lado: "true",
        role: "Gerente de Projetos",
        avatar: "/img/inspiracoes-foto2.png",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, vel quis architecto libero eius, sapiente corrupti quidem laboriosam beatae molestias explicabo delectus asperiores voluptas a, tempore repellat maxime quasi?",
      },
    ]
  }
  
};

function Inspiracoes() {
  const settings = {
    // autoplay:true,
    // autoplayspeed: 3000,
    dots: false,
    infinite: false,
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Banner
        subtitle="Inspirações"
        url="/img/inspiracoes-banner.png"
        pharase="Conheça um pouco sobre a história dessas pessoas incríveis que fizeram e fazem carreira no mundo da computação."
      />

      <div className="containerzao">
        <Slider {...settings}>
          {profissionals.primeiro.array.map((prof) => (
            <Carrossel 
              key={prof.name}
              classe={prof.lado}
              name={prof.name}
              area={prof.area}
              role={prof.role}
              avatar={prof.avatar}
              description={prof.description}
            />
          ))}
        </Slider>
      </div>

      <div style={{ backgroundColor: "#f054541a" }}>
        <div className="containerzao">
          <Slider {...settings}>
            {profissionals.segundo.array.map((prof) => (
              <Carrossel
                key={prof.name}
                classe={prof.lado}
                name={prof.name}
                area={prof.area}
                role={prof.role}
                avatar={prof.avatar}
                description={prof.description}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className="containerzao">
        <Slider {...settings}>
          {profissionals.terceiro.array.map((prof) => (
            <Carrossel
              key={prof.name}
              classe={prof.lado}
              name={prof.name}
              area={prof.area}
              role={prof.role}
              avatar={prof.avatar}
              description={prof.description}
            />
          ))}
        </Slider>
      </div>

      <div className={css.noticias}>
        <h2>Noticias - Últimas Novidades</h2>

        <Noticias />
      </div>

      <div className={css.fundadoras}>
        <div className={css.container}>
          <div className={css.titulo}>
            <h2>MATK - Fundadoras do</h2>
            <img src={logo} alt="Logo da overLoop" />
          </div>

          <div className={css.galery}>
            {founders.map((founder) => (
              <CardFounders
                key={founder.name}
                name={founder.name}
                role={founder.role}
                avatar={founder.avatar}
                social_icons={founder.social_icons}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={css.nps}>
        <h2>Ajude-nos a melhorar</h2>
        <p>Responda nosso formulário para que possamos melhorar nosso site</p>
        <Button text="Avalie!" link="/nps" />
        <br></br>
      </div>

      <Footer />
    </>
  );
}

export default Inspiracoes;
