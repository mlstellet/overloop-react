import styled from "styled-components"

const SubTitle = styled.h2`
    font-family: 'Antic Slab', serif;
    margin-bottom: 16px;

    display: inline-block;
    border-bottom: 3px solid #222831;
    padding-bottom: 10px;

    @media(max-width: 620px) {
        text-align: center;
    }
`

export default function H2({h2}) {
    return (
        <SubTitle>{h2}</SubTitle>
    )
}