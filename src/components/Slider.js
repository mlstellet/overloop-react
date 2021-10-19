import Slide from "../components/Slide"
import styled from "styled-components"

const slides = [
    {
        "htmlFor": "slide1",
        "url": "/img/home-slider1.png"
    },
    {
        "htmlFor": "slide2",
        "url": "/img/home-slider2.jpg"
    },
    {
        "htmlFor": "slide3",
        "url": "/img/home-slider3.jpg"
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
            {slides.map((slide, count) => {
                if (count === 0) {
                    return (
                        <Slide 
                            key={slide.htmlFor}
                            htmlFor={slide.htmlFor}
                            url={slide.url}
                            defaultChecked={this.props.defaultChecked}
                        />
                    )
                } else {
                    return (
                        <Slide 
                            key={slide.htmlFor}
                            htmlFor={slide.htmlFor}
                            url={slide.url}
                        />
                    )
                }
            })}
        </Container>
    )
}

export default Slider