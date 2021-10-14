import css from '../assets/css/header.module.css'
import logo from '../assets/img/overLoop-logo-white.png'

function Header({fundo}) {

    return (
        <header className={fundo === "transparente" ? css.transparente : css.solid}>
        <a href="index.html"><img className={css.logo} src={logo} alt="Logo da overLoop" /></a>
        <nav>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="vagas.html">vagas</a></li>
                <li><a href="tutoriais.html">tutoriais</a></li>
                <li><a href="inspiracao.html">inspirações</a></li>
            </ul>
        </nav>
    </header>
    ); 
}

export default Header;