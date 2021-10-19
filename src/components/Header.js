import { Link } from 'react-router-dom'
import css from '../assets/css/header.module.css'
import logo from '../assets/img/overLoop-logo-white.png'

function Header({fundo}) {

    return (
        <header className={fundo === "transparente" ? css.transparente : css.solid}>
        <Link to="/"><img className={css.logo} src={logo} alt="Logo da overLoop" /></Link>
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/vagas">vagas</Link></li>
                <li><Link to="/tutoriais">tutoriais</Link></li>
                <li><Link to="/inspiracoes">inspirações</Link></li>
            </ul>
        </nav>
    </header>
    ); 
}

export default Header;