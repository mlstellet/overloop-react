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

    &:checked ~ .img_tutorial {
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
    /* height: 100%;  ocupar toda altura do container */
    height: 360px;
    width: 100%;
    vertical-align: top; /* img alinhada verticalmente em relação ao topo */

    opacity: 0;
    visibility: hidden;
`

function handleChange(e) {
    this.props.onChange(e.target.checked);
}

function Slide({ htmlFor, url, defaultChecked }) {
    // checked deve ser apenas para o primeiro componente criado
    return (
        <Li>
            {/* <input type="checkbox"  */}
                    {/* name={this.props.name}  */}
                    {/* defaultChecked={this.props.defaultChecked}  */}
                    {/* onChange={ this.handleChange } /> */}
            <Input type="radio" id={htmlFor} name="slide" defaultChecked />
            <Label htmlFor={htmlFor}></Label>
            <Img style={{backgroundImage: `url(${url})`}}></Img>
        </Li>
    )
}

export default Slide