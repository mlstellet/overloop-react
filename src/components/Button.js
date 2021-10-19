import styled from 'styled-components'

const But = styled.button`
    display: block;
    border: none;
    text-decoration: none;

    cursor: pointer;

    &.call_to_action {
        width: 200px;
        height: 50px;

        background: #222831;

        border-radius: 10px;
        
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;

        transition: all .2s linear;
    }

    &.call_to_action:hover {
        background: #F05454;
    }
`

export default function Button(props) {
    return (
        <But className="call_to_action">
            {props.text}
        </But>
    )
}