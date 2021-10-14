import css from "../assets/css/banner.module.css"

function Banner(props) {
    return (
        <section className="intro" style={{backgroundImage: `url(${props.url}), linear-gradient(#F05454, #eb01a5)`}}>
            <h1>{props.title}</h1>
        </section>
    )
}

export default Banner