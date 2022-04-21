import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { useTranslation, Link, useI18next } from "gatsby-plugin-react-i18next"

const linkStyle = {
  textDecoration: "none",
  color: "white",
}

const TSideBar = ({ isOpen, toggle }) => {
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            {t("home")}
          </SidebarLink>
          <SidebarLink to="/intro" onClick={toggle}>
            {t("intro")}
          </SidebarLink>
          <Tippy content="Coming soon">
            <SidebarLink to="/" onClick={toggle}>
              {t("staking")}
            </SidebarLink>
          </Tippy>
          <SidebarLinkOne
            onClick={toggle}
            a
            href="https://docs.g2069.com/fundamentals/introduction"
            target="_blank"
          >
            {t("whitepaper")}
          </SidebarLinkOne>
          <Tippy content="On 15th May 2022, 00:00 UTC">
            <SidebarLink to="/" onClick={toggle}>
              {t("presale")}
            </SidebarLink>
          </Tippy>
          {languages.map(lng => (
            <SidebarSelect key={lng}>
              <Link to={originalPath} language={lng} style={linkStyle}>
                {lng}
              </Link>
            </SidebarSelect>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default TSideBar

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #00ffff;
    transition: 0.2s ease-in-out;
  }
`
export const SidebarSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #00ffff;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarLinkOne = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #00ffff;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`
