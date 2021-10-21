import css from '../assets/css/nps.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header"

function Nps() {
    return (
        <div>
            <Header />

            <section  className={css.avaliacao}>
                    <h2>Avaliação</h2>
            </section>
            <section  className={css.descricao}>
                <p>Ajude-nos a melhorar nossa plataforma através da nossa pesquisa de usabilidade!</p>
            </section>
            <section  className={css.containerForm}>
                    <form action="nps-enviado.html" id="form" enctype="multipart/form-data">
                        <label for="nome">Nome*:</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui" required />

                        <label for="email">Email*:</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu email aqui" required />

                        <section  className={css.recomenda}>
                            <p>O quanto você recomendaria este site a outra pessoa?</p>
                            <div  className={css.paginacao}>
                                <button value="1">1</button>
                                <button value="2">2</button>
                                <button value="3">3</button>
                                <button value="4">4</button>
                                <button value="5">5</button>
                                <button value="6">6</button>
                                <button value="7">7</button>
                                <button value="8">8</button>
                                <button value="9">9</button>
                                <button value="10"  className={css.button10}>10</button>
                            </div>
                        </section>
                    
                        <section  className={css.facil}>
                            <p>O quanto você achou este site fácil de usar?</p>
                            <div  className={css.paginacao}>
                                <button value="1">1</button>
                                <button value="2">2</button>
                                <button value="3">3</button>
                                <button value="4">4</button>
                                <button value="5">5</button>
                                <button value="6">6</button>
                                <button value="7">7</button>
                                <button value="8">8</button>
                                <button value="9">9</button>
                                <button value="10"  className={css.button10}>10</button>
                            </div>
                        </section>
                    
                        <section  className={css.util}>
                            <p>O quanto você achou este site útil?</p>
                            <div  className={css.paginacao}>
                                <button value="1">1</button>
                                <button value="2">2</button>
                                <button value="3">3</button>
                                <button value="4">4</button>
                                <button value="5">5</button>
                                <button value="6">6</button>
                                <button value="7">7</button>
                                <button value="8">8</button>
                                <button value="9">9</button>
                                <button value="10"  className={css.button10}>10</button>
                            </div>
                        </section>

                            <section  className={css.enviar}>
                                <button type="submit"  className={css.botaoenviar}>Enviar</button> 
                            </section>

                    </form>
            </section>
    
            <Footer />
        </div>
    );
}

export default Nps;