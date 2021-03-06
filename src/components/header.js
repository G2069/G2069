import React from "react"
import Dropdown from "./Dropdown"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import Logo from "../images/logo.png"
import { Link, useTranslation} from "gatsby-plugin-react-i18next"

const Header = ({ toggle }) => {
  const { t } = useTranslation()

  return (
    <Nav>
      <NavLink to="/">
        <LogoImg src={Logo} alt="g2069-logo"/>
      </NavLink>
      <NavBars onClick={toggle}>
        <FaBars />
      </NavBars>
      <NavMenu>
        <Dropdown />
        <NavItem>
          <NavLink to="/">{t("home")}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/intro">{t("intro")}</NavLink>
        </NavItem>
        <NavItem>
          <Tippy content={t("coming")}>
            <NavToolTip>{t("staking")}</NavToolTip>
          </Tippy>
        </NavItem>
        <NavItem>
          <NavLinkOne
            href="https://docs.g2069.com/fundamentals/introduction"
            target="_blank"
          >
            {t("whitepaper")}
          </NavLinkOne>
        </NavItem>
        <NavItem>
        <NavLinkOne
            href="https://www.finance.g2069.com/"
            target="_blank"
          >
            {t("presale")}
          </NavLinkOne>
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

const NavLinkOne = styled.a`
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

  .dropdown {
    width: 100px;
    margin: 0 auto;
  }

  .dropdown .dropdown-btn {
    padding: 10px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
