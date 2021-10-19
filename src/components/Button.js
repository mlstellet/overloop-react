import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// const But = styled.a`
const LS = {}
LS.NavFixedItem_LINK = styled(Link)`
    display: block;
    border: none;
    text-decoration: none;

    width: 200px;
    height: 50px;
    background: #222831;
    border-radius: 10px;
        
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    padding-top: 12px; /* transformei numa tag a então precisa desse padding */

    cursor: pointer;

    -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.5); 
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.5);

    transition: all .2s linear;
    
    &:hover {
        background: #F05454;
    }
`

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string
}

Button.defaultProps = {
    link: "/"
}

export default function Button(props) {
    return (
        <LS.NavFixedItem_LINK to={props.link}>
            {props.text}
        </LS.NavFixedItem_LINK>
    )
}