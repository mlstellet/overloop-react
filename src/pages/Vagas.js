import Footer from "../components/Footer"
import Header from "../components/Header"
import Filtro from "../components/Filtro_Vagas"
import QuadroVagas from "../components/QuadroVagas"


function Vagas() {
    return (
        <>
            <Header />
            <Filtro />
            <QuadroVagas />
            <Footer />
        </>
    )
}

export default Vagas