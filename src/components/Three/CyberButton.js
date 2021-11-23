import React from "react"
import "./CyberButton.css"
import styled from "styled-components"

const CyberButton = () => {
  return (
      <ButtonWrapper>
    <button className="cybr-btn">
      Explore<span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">
        Explore
      </span>
    </button>
    </ButtonWrapper>
  )
}

export default CyberButton


const ButtonWrapper = styled.div`
position: relative;
z-index: 1;
`