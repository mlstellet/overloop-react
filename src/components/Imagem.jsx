import styled from "styled-components"

const Img = styled.img`
    max-width: 100%;
    width: 50%;
    height: auto;

    @media(max-width: 620px) {
        .icon {
            /* DIMINUIR TAMANHO DOS ICONS */
            max-width: 200px;
        }
        .foto {
            width: 200px;
        }
    }
`

export default function Imagem({imagem, classe, textoAlt}) {
    return (
        <Img src={imagem} alt={textoAlt} className={classe} />
    )
}