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
            {/* se title existe nao existe h2 nem p, se h2 e p existe nao existe h1 */}
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.pharase}</p>
        </section>
    )
}

export default Banner