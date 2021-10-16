import Footer from "../components/Footer"
import Header from "../components/Header"
import Filtro from "../components/Filtro_Vagas"
import Card_Vagas from "../components/Card_Vagas"


function Vagas() {
    return (
        <>
            <Header />
            <Filtro />
            <Card_Vagas />
            <Footer />
        </>
    )
}

export default Vagas