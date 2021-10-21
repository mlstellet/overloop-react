import Footer from "../components/Footer"
import Header from "../components/Header"
import css from "../assets/css/npsEnviado.module.css"
import thanks from "../assets/img/npsenviado-thankyou.png"

function NpsEnviado() {
    return (
        <div>
            <Header />
            <section className={css.top}>
                <h2>Obrigada!</h2>
                <p>O seu feedback é muito importante para o aprimoramento do projeto! </p>
            </section>


            <section className={css.content}>
               <img src={thanks} alt="Thank you!" />
            </section>


            <Footer />
        </div>
    );
}

export default NpsEnviado;