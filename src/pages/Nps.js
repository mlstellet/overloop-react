import css from '../assets/css/nps.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Avaliacao from '../components/Avaliacao';
import Input from "../components/InputNps";
import TituloNps from '../components/TituloNps';

function Nps() {
    return (
        <div>
            <Header />
            <TituloNps />
            

            
            <section  className={css.containerForm}>
                    <form action="nps-enviado.html" id="form" enctype="multipart/form-data">

                        <Input />
                        <div className={css.avaliacao}>
                            <Avaliacao />
                        </div>
                        
                        

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