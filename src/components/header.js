import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import Logo from "../images/logo.png"

const Header = ({toggle}) => {
  return (
    <Nav>
      <NavLink to="/">
        <LogoImg src={Logo} />
      </NavLink>
      <NavBars onClick={toggle}>
        <FaBars />
      </NavBars>
      <NavMenu>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/intro">Intro</NavLink>
        </NavItem>
        <NavItem>
          <Tippy content="Coming soon">
            <NavToolTip>Staking</NavToolTip>
          </Tippy>
        </NavItem>
        <NavItem>
          <NavLink to="/">Whitepaper</NavLink>
        </NavItem>
        <NavItem>
          <Tippy content="To be announced">
            <NavToolTip>Presale</NavToolTip>
          </Tippy>
        </NavItem>
      </NavMenu>
    </Nav>
  )
}

export default Header

//styled-components
const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1300px) / 2);
  z-index: 100;
  position: relative;

  @media screen and (max-with: 960px) {
    transition: 0.8s all ease;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  max-width: 200px;
`

const NavToolTip = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover span {
    visibility: visible;
  }
`

const NavBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const LogoImg = styled.img`
  width: 200px;
  height: 80px;
`