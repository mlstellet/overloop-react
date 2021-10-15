import css from "../assets/css/flexContainer.module.css"

function FlexContainer(props) {
    return (
        <section className={css[props.secao]}>
            <div className={css.container}>
                {props.children}
            </div>
        </section>
    )
}

export default FlexContainer