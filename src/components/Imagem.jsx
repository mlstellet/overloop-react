import styled from "styled-components"

const Img = styled.img`
    max-width: 100%;
    height: auto;

    @media(max-width: 620px) {
        max-width: 200px;
    }
`

export default function Imagem({imagem, classe, textoAlt}) {
    return (
        <Img src={imagem} alt={textoAlt} />
    )
}