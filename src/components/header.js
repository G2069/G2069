import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import Logo from "../images/logo.png"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const Header = ({ toggle }) => {
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()

  return (
    <Nav>
      <NavLink to="/">
        <LogoImg src={Logo} />
      </NavLink>
      <NavBars onClick={toggle}>
        <FaBars />
      </NavBars>
      <NavMenu>
        <div class="dropdown">
          <button class="dropbtn">{t("languages")}</button>
          <div class="dropdown-content">
            <ul>
              {languages.map(lng => (
                <li key={lng}>
                  <Link to={originalPath} language={lng}>
                    {lng}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
          <Tippy content={t("presaleMsg")}>
            <NavToolTip>{t("presale")}</NavToolTip>
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

  .dropbtn {
    background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content ul li {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content li:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
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
