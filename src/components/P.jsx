import styled from "styled-components"

const Paragraph = styled.p`
font-family: 'Urbanist';
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 55px;
text-align: left;
`

export default function(props) {
    return (
        <Paragraph>
            {props.children}
        </Paragraph>
    )
}