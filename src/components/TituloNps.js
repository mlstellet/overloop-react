import css from "../assets/css/tituloNps.module.css"

function TituloNps() {
    return (
        <div>
            <div className={css.avaliacao}>
                    <h2 >Avaliação</h2>
            </div>
            <div  className={css.descricao}>
                <p>Ajude-nos a melhorar nossa plataforma através da nossa pesquisa de usabilidade!</p>
            </div>
        </div>
    );
}

export default TituloNps;