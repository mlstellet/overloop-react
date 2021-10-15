import css from "../assets/css/banner.module.css"
import PropTypes from 'prop-types'

Banner.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    pharase: PropTypes.string
}

function Banner(props) {
    return (
        <section className={css.intro} style={{backgroundImage: `url(${props.url}), linear-gradient(#F05454, #eb01a5)`}}>
            {/* RENDERIZACAO CONDICIONAL */}
            {props.title && !props.subtitle && 
                (<h1>{props.title}</h1>)  
            }
            {!props.title && props.subtitle && props.pharase &&
                <>
                    <h2>{props.subtitle}</h2>
                    <p>{props.pharase}</p>
                </>
            }
        </section>
    )
}

export default Banner