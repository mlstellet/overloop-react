import css from "../assets/css/cardTutoriais.module.css";

function CardTutoriais() {
    return (
        <article>
        <div className={css.container}>
        <div className={css.logo}>
            <a href= "https://kotlinlang.org/" target="blank"><img src="../img/tutoriais-kotlin.svg" alt="Logo Kotlin" /></a>
        </div>
        <div className={css.texto}>
            <h3>Kotlin</h3>
            <p>Kotlin é uma linguagem de programação desenvolvida pela JetBrains e executada na Márquina Virtual do Java.
                É uma linguagem bastante tipada, e utilizada para o desenvolvimento de aplicativos Android.
                <ul>
                    <li>
                        <a href="#">Link</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                </ul>
            </p>
        </div>
        </div>
    </article>
    );
}

export default CardTutoriais;