import { useEffect } from "react"
import css from "../assets/css/botaoAvaliacao.module.css"

function BotaoAvaliacao({ setValue, classe }) {
    let buttons = undefined

    // após renderizar a tela
    useEffect(() => {
        buttons = document.querySelectorAll("." + classe)
    })

    const clicado = (e) => {
        setValue(e.target.value)
        
        buttons.forEach(button => {
            button.classList.remove(css.escolhido)
        })


        e.target.classList.add(css.escolhido)
    }

    return (
        <div className={css.paginacao}>
            <button onClick={clicado} type="button" value="1" className={css.button1 + " " + classe}>1</button>
            <button onClick={clicado} className={classe} type="button" value="2">2</button>
            <button onClick={clicado} className={classe} type="button" value="3">3</button>
            <button onClick={clicado} className={classe} type="button" value="4">4</button>
            <button onClick={clicado} className={classe} type="button" value="5">5</button>
            <button onClick={clicado} className={classe} type="button" value="6">6</button>
            <button onClick={clicado} className={classe} type="button" value="7">7</button>
            <button onClick={clicado} className={classe} type="button" value="8">8</button>
            <button onClick={clicado} className={classe} type="button" value="9">9</button>
            <button onClick={clicado} type="button" value="10" className={css.button10 + " " + classe}>10</button>
        </div>

    );
}

export default BotaoAvaliacao;