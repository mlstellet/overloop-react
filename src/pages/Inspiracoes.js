import Banner from "../components/Banner";
import CardFounders from "../components/CardFounders";
import css from "../assets/css/inspiracoes.module.css";
import Button from "../components/Button";
import Noticias from "../components/noticias";
import logo from "../assets/img/inspiracoes-icon-overLoop-logopreto.png";
import Footer from "../components/Footer";
import Carrossel from "../components/InspCarousel";

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
      linkedin: "",
      insta: "",
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

function Inspiracoes() {
  return (
    <>
      <Banner
        subtitle="Inspirações"
        url="/img/inspiracoes-banner.png"
        pharase="Conheça um pouco sobre a história dessas pessoas incríveis que fizeram e fazem carreira no mundo da computação."
      />
      
     <Carrossel/>

      <div className={css.noticias}>
        <h2>Noticias - Últimas Novidades</h2>
        {/* su<Noticias/> */}
      </div>
      
      <div className={css.fundadoras}>
        <div className={css.container}>

          <div className={css.titulo}>
            <h2>MATK - Fundadoras do</h2>
            <img src={logo} alt="Logo da overLoop"/>
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

        <p>Lorem ipsum dolor sit amet consectetur <br/>
            adipisicing elit. Culpa illo obcaecati asperiores sit doloremque vitae maxime, <br/>
            aliquid quis placeat id quaerat.
        </p>
        <br/>

        <a href="nps.html"><Button text="Buscar"/></a>
        <br/>
      </div>

        
      <Footer />
    </>
  );
}

export default Inspiracoes;
