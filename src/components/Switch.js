import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Cable from "../images/switch.png"
import { FaDesktop } from "react-icons/fa"
import { AiOutlineMobile } from "react-icons/ai"

const Switch = () => {
  return (
    <SwitchContainer>
      <BgContainer>
        <SwitchBg src={Cable} />
      </BgContainer>
      <SwitchBox>
        <SwitchBox1>
          <SwitchH1>Choose Device</SwitchH1>
          <SwitchP>For better user experience</SwitchP>
        </SwitchBox1>
        <SwitchBox2>
          <SwitchBox3>
            <SwitchCard to='/desktop/'>
              <SwitchPc />
              <SwitchH2>PC</SwitchH2>
            </SwitchCard>
            <SwitchCard to='/mobile'>
              <SwitchMobile />
              <SwitchH2>Mobile</SwitchH2>
            </SwitchCard>
          </SwitchBox3>
        </SwitchBox2>
      </SwitchBox>
    </SwitchContainer>
  )
}

export default Switch

const SwitchContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 968px;
  position: relative;
  z-index: 1;
  max-width: 1000;
  margin: 0;
  padding: 0;
`

const BgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const SwitchBg = styled.img`
  height: 100%;
  width: 100%;
`
const SwitchBox = styled.div`
  border-radius: 20px;
  background: #000000;
  box-shadow: 6px 6px 12px #000000, -6px -6px 12px #000000;
  align-items: center;
  width: 600px;
  height: 350px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
  }
`

const SwitchBox1 = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  height: 30%;
`
const SwitchBox2 = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  height: 70%;
  width: 500px;
`

const SwitchBox3 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`

const SwitchCard = styled(Link)`
  background: #fff;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: 125px;
  }
`

const SwitchPc = styled(FaDesktop)`
color: #000000;
font-size: 30px;
`

const SwitchMobile = styled(AiOutlineMobile)`
color: #000000;
font-size: 30px;
`

const SwitchH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const SwitchH2 = styled.h2`
  font-size: 1rem;
  color: #000000;
`

const SwitchP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
`
