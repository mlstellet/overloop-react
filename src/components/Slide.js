import styled from 'styled-components'

const Li = styled.li`
    position: absolute;
    width: 100%;

    &:nth-child(1) label {
        left: 44%;
    }

    &:nth-child(2) label {
        left: 49%;
    }

    &:nth-child(3) label {
        left: 54%;
    }
`

const Input = styled.input`
    display: none; /* nenhuma amostragem visual do elemento */

    &:checked ~ div {
        opacity: 1;
        visibility: visible;
        z-index: 10;
    }

    &:checked ~ label {
        background-color: #F05454;
    }
`

const Label = styled.label`
    background-color: #222831;
    border-radius: 16px;
    cursor: pointer;
    display: block;
    position: absolute;
    height: 20px;
    width: 20px;
    z-index: 10;

    bottom: -30px;
`

const Img = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    margin: auto;
    height: 360px;
    width: 100%;
    vertical-align: top; /* img alinhada verticalmente em relação ao topo */

    opacity: 0;
    visibility: hidden;
`

// function handleClick(e) {
//     // e.target.setAttribute("checked", true)
//     e.target.checked = checked
// }

function Slide({ htmlFor, url, checked }) {
    // checked deve ser apenas para o primeiro componente criado
    console.log(checked)
    return (
        <Li>
            {checked ? (
                <Input type="radio" id={htmlFor} name="slide" checked /> 
            ) : (
                <Input type="radio" id={htmlFor} name="slide" /> 
            )}
            <Label htmlFor={htmlFor}></Label>
            <Img style={{backgroundImage: `url(${url})`}}></Img>
        </Li>
    )
}

export default Slide