import styled from "styled-components"
import Painel from "./Painel"

const Container = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: .9fr .1fr 1fr; 
    gap: 20px 20px; 
    grid-template-areas: 
        "foto-1 foto-2 foto-2"
        "foto-1 foto-4 foto-5"
        "foto-3 foto-4 foto-5";

    @media(max-width: 1060px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
`

const painel = [
    {
        "frase":'❝Uma pessoa que nunca cometeu um erro, nunca tentou nada de novo.❞',
        "autor":"Albert Einstein",
        "url":"/img/home-painel1.png",
        "grid_area":"foto-1"
    },
    {
        "frase":'❝Se você não sabe onde quer ir, qualquer caminho serve.❞',
        "autor":"Alice no País da Maravilhas",
        "url":"/img/home-painel2.png",
        "grid_area":"foto-2"
    },
    {
        "frase":'❝Dê o seu melhor todos os dias, mesmo que isso aparente não ter retorno nenhum.❞',
        "autor":"Alguém disse",
        "url":"/img/home-painel3.png",
        "grid_area":"foto-3"
    },
    {
        "frase":'❝Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam.❞',
        "autor":"Thomas Edison",
        "url":"/img/home-painel4.png",
        "grid_area":"foto-4"
    },
    {
        "frase":'❝A melhor maneira de prever o futuro é criá-lo.❞',
        "autor":"Peter Drucker",
        "url":"/img/home-painel5.png",
        "grid_area":"foto-5"
    }
]

function Quadro() {
    return (
        <Container>

            {painel.map(item => {
                return (
                    <Painel
                        key={item.grid_area}
                        frase={item.frase}
                        autor={item.autor}
                        url={item.url}
                        grid_area={item.grid_area}
                    />
                )
            })}

        </Container>
    )
}

export default Quadro