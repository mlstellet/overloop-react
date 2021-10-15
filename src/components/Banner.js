import PropTypes from 'prop-types'
import styled from 'styled-components'

Banner.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    pharase: PropTypes.string
}

const Container = styled.section`
    color: #fff;

    width: 100%;
    height: 700px;

    text-align: center;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const SubTitle = styled.h1`
    display: inline-block;

    font-family: 'Antic Slab', serif;
    text-transform: uppercase;
    font-size: 2.5rem;
    letter-spacing: 0.2em;

    border-bottom: 3px solid #fff;
    padding-bottom: 10px;
`

const Title = styled.h1`
    font-family: 'Antic Slab', serif;
    /* font-family: 'Playfair Display SC', serif; */

    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-align: center;

    margin-bottom: 16px;
    padding-top: 440px;
`

const Paragraph = styled.p`
    margin-top: 20px;

    font-family: 'Urbanist', sans-serif;
    font-size: 18px;
    font-weight: 400;
`

function Banner(props) {
    return (
        <Container style={{backgroundImage: `linear-gradient(rgba(240, 84, 84, 0.2), rgba(235, 1, 165, 0.2)), url(${props.url})`}}>
            {/* RENDERIZACAO CONDICIONAL */}
            {props.title && !props.subtitle && 
                (<Title>{props.title}</Title>)  
            }
            {!props.title && props.subtitle && props.pharase &&
                <>
                    <SubTitle>{props.subtitle}</SubTitle>
                    <Paragraph>{props.pharase}</Paragraph>
                </>
            }
        </Container>
    )
}

export default Banner