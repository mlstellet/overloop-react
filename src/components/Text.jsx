import styled from "styled-components"

const Container = styled.div`
    max-width: calc(50vw);
    width: 620px;
`

export default function Text(props) {
    return (
        // <div className="text">
        <Container>
            {props.children}
        </Container>
        // </div>
    )
}
