import styled from "styled-components"

const Content = styled.section`
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export default function VagasPainel(props) {
    return (
        <Content>
            {props.children}
        </Content>
    )
}