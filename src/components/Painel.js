import styled from "styled-components"

const Container = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    -webkit-box-shadow: 1px 4px 15px 5px rgba(0,0,0,0.4); 
    box-shadow: 1px 4px 15px 5px rgba(0,0,0,0.4);

    &.foto-4 { grid-area: foto-4; }
    &.foto-2 { grid-area: foto-2; }
    &.foto-1 { grid-area: foto-1; }
    &.foto-3 { grid-area: foto-3; }
    &.foto-5 {
        grid-area: foto-5;
        width: 100%;
        height: 500px;
        min-height: 200px;
    }

    @media(max-width: 1060px) {
        width: 100%;
        height: 200px;
    }
`

const P = styled.p`
    color: #fff;
    background-color: #f054547c;

    font-family: 'Antic Slab', serif;

    height: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;


    opacity: 0;
    transition: 0.5s linear;

    &:hover {
        opacity: 1;
    }

    &.cite {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
    }
`

function Painel({url, frase, autor, grid_area}) {
    return (
        <Container style={{backgroundImage: `url(${url})`}} className={[grid_area]}>
            <P>
                <cite>{frase}</cite>
                <br/>― {autor}
            </P>
        </Container>
    )
}

export default Painel