import styled from "styled-components"

const Section = styled.section`
    &:not(.info) {
        padding: 100px 0 90px 0;
    }

    &.sobre,
    &.vagas,
    &.mulheres,
    &.tutoriais {
        background: rgba(240, 84, 84, 0.1); 
    }

    &.code-break {
        width: 100%;
        height: 300px;

        background-image: url("/img/home-code-break.png");
    }

    &.pessoas .container,
    &.mulheres .container,
    &.tutoriais .container {
        flex-direction: column;
    }
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 4rem;
`

function FlexContainer(props) {
    return (
        <Section className={[props.secao]}>
            <Container className="container">
                {props.children}
            </Container>
        </Section>
    )
}

export default FlexContainer