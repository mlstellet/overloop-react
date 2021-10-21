import Botao from "../components/BotaoAvaliacao"
import css from "../assets/css/avaliacao.module.css"

function Avaliacao() {
    return (
        <div>
            <div className={css.recomenda}>
                <p>O quanto você recomendaria este site a outra pessoa?</p>
                <Botao />
            </div>

            <div className={css.facil}>
                <p>O quanto você achou este site fácil de usar?</p>
                <Botao />
            </div>

            <div className={css.util}>
                <p>O quanto você achou este site útil?</p>
                <Botao />
            </div>
        </div>
    );
}

export default Avaliacao;