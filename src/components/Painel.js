import css from "../assets/css/painel.module.css"

function Painel({url, frase, autor, grid_area}) {
    return (
        <div style={{backgroundImage: `url(${url})`}} className={css.foto + " " + [grid_area]}>
            <p className={css.frase_inspiracao}>
                <cite>{frase}</cite>
                <br/>― {autor}
            </p>
        </div>
    )
}

export default Painel