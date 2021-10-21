import Slide from "../components/Slide"
import styled from "styled-components"

const slides = [
    {
        "htmlFor": "slide1",
        "url": "/img/home-slider1.png",
        "checked": true
    },
    {
        "htmlFor": "slide2",
        "url": "/img/home-slider2.jpg",
        "checked": false
    },
    {
        "htmlFor": "slide3",
        "url": "/img/home-slider3.jpg",
        "checked": false
    }       
]

const Container = styled.ul`
    display: block;
    height: 400px;
    width: 600px;
    max-width: 100%;
    margin: auto;
    position: relative;
`

function Slider() {
    return (
        <Container>
            {slides.map((slide) => {
                return (
                    <Slide 
                        key={slide.htmlFor}
                        htmlFor={slide.htmlFor}
                        url={slide.url}
                        checked={slide.checked}
                    />
                )
            })}
        </Container>
    )
}

export default Slider