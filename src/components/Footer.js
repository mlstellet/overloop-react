import css from '../assets/css/footer.module.css'
import logo from '../assets/img/overLoop-logo-white.png'
import face from '../assets/img/facebook.svg'
import twitter from '../assets/img/twitter.svg'
import insta from '../assets/img/instagram.svg'
import youtube from '../assets/img/youtube.svg'

function Footer() {
    return(
        <footer>
            <section className={css.info}>
                <img className={css.logo} src={logo} alt="Logo da overLoop" />
                <div className={css.contato}>
                    <h3>Contato</h3>
                    <p><a href="https://goo.gl/maps/EYHFqbz6LECyFk8p6">Broad St, Newark, NJ 07102 - USA</a></p>    
                    <p><a href="tel:+1973854555548">+1 (973) 854-555-548</a></p>
                    <p><a href="mailto: contact@overloop.com">contact@overloop.com</a></p>
                </div>
                <div className={css.redes_sociais}>
                    <h3>Redes sociais</h3>
                    <ul>
                        <li><a href="#"><img src={face} alt="Icon Facebook" /></a></li>
                        <li><a href="#"><img src={twitter} alt="Icon Twitter" /></a></li>
                        <li><a href="#"><img src={insta} alt="Icon Instagram" /></a></li>
                        <li><a href="#"><img src={youtube} alt="Icon Youtube" /></a></li>
                    </ul>
                </div>
            </section>

            <div className={css.copy}>
                <p>Copyright - Todos os direitos reservados</p>
                <p>#GeraçãoElasEmTech 2021</p>
            </div>
        </footer>
    )
}

export default Footer