import "../assets/css/carousel.css";

function Carrossel(props) {
  return (
    <>
      <div className="profissoes">
        <div className="subtitulo">
          <h2>{props.area}</h2>
        </div>

        <div className="info">
          <div className="fotos">
            <img src={props.avatar} alt="" />
          </div>

          <div className="texto">
            <div className="titulo">
              <h3>{props.name}</h3>
              <h4>{props.role}</h4>
            </div>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrossel;
