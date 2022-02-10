import React from "react"
import { Carousel } from "react-bootstrap"
import heroes from "../images/resource/g2069-hero.jpg"
import weapons from "../images/resource/g2069-weapon.jpg"
import energy from "../images/resource/g2069-energy.jpg"
import rack from "../images/resource/g2069-rack.jpg"
import seed from "../images/resource/g2069-seed.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const ImageSlider = () => {
  return (
    <CarouselContainer>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={heroes} alt="G2069 Heroes" />
          <Carousel.Caption>
            <h3>G-Heroes</h3>
            <p>Collect and form your team to join PvE and PvP!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={weapons} alt="G2069 Heroes" />
          <Carousel.Caption>
            <h3>Weapons</h3>
            <p>To enhance your G-Heroes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rack} alt="G2069 Rack" />
          <Carousel.Caption>
            <h3>Rack</h3>
            <p>Earn $GE by farming or renting.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={seed} alt="G2069 Seed" />
          <Carousel.Caption>
            <h3>Seed</h3>
            <p>Plant on rack and harvest to earn $GE.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={energy} alt="G2069 GE" />
          <Carousel.Caption>
            <h3>$GE</h3>
            <p>Native token of G-2069.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  )
}

export default ImageSlider

const CarouselContainer = styled.div`
  h3 {
    font-size: 50px;
  }
  p {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 10px;
    }
  }
`
