import css from '../assets/css/tutoriais.module.css';
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import DocumentacaoTutoriais from "../components/DocumentacaoTutoriais";
import QuadroTutoriais from "../components/QuadroTutoriais";

function Tutoriais() {
    return (
        <>
            <Header fundo="transparente" />

            <Banner subtitle="Tutoriais" url="/img/tutoriais-banner.png" pharase="Conteúdos de qualidade e gratuitos para todes aqueles que buscam ingressar e evoluir no mundo tech."/>
            <section className={css.tutoriais}>
                <QuadroTutoriais />
                <DocumentacaoTutoriais />
            </section>
            <Footer />
        </>
    )
}

export default Tutoriais