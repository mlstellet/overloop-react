import styled from "styled-components"

const Container = styled.div`
    max-width: 620px;
    min-width: 275px;
    width: calc(50vw);
`

export default function Text(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
