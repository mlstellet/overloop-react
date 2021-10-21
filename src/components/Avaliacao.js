import Botao from "../components/BotaoAvaliacao"
import css from "../assets/css/avaliacao.module.css"

function Avaliacao(props) {
    return (
        <div>
            <div className={css.recomenda}>
                <p>O quanto você recomendaria este site a outra pessoa?</p>
                <Botao setValue={props.recomenda}/>
            </div>

            <div className={css.facil}>
                <p>O quanto você achou este site fácil de usar?</p>
                <Botao setValue={props.facil}/>
            </div>

            <div className={css.util} id="util">
                <p>O quanto você achou este site útil?</p>
                <Botao setValue={props.util}/>
            </div>
        </div>
    );
}

export default Avaliacao;