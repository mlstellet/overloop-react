import css from '../assets/css/filtro.module.css'
import lupa from '../assets/img/icon-search.png'
import mala from '../assets/img/vaga-mala-icon.svg'
import localizacao from '../assets/img/vagas-localizacao-icon.svg'

function Filtro() {
    return(
    <section className={css.top}>
        <h1 align="center" >Vagas</h1>
        <hr />
        <p>Encontre seu emprego dos sonhos e dê match!</p>
        <div className={css.formulario}>
            <div className={css.input_cargo}>
                <label for="cargo-empresa">
                    <img className={css.icon} src={mala} alt="Ícone mala" />
                </label>
                <input list="cargo-empresas" name="cargo-empresa" id="cargo-empresa" placeholder="Filtrar por cargo" />
                <datalist id="cargo-empresas">
                  <option value="DevOps" />
                  <option value="Backend" />
                  <option value="Fullstack" />
                  <option value="TI" selected />
                </datalist>
            </div>
                
            <div className={css.input_localizacao}>
                <label for="localizacao">
                    <img className={css.icon} src={localizacao} alt="Ícone localização" />
                </label>
                <input id={css.localizacao} type="text" placeholder="Filtrar por localização" />
            </div>
               
            <button id={css.search}>
                <img id={css.lupa} src={lupa} alt="Ícone lupa" />
                <span>Pesquisar</span>
            </button>
        </div>
    </section>
)
}

export default Filtro