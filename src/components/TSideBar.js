import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

const TSideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/mobile/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/mobile/intro" onClick={toggle}>
            Intro
          </SidebarLink>
          <Tippy content="Coming soon">
            <SidebarLink to="/mobile/" onClick={toggle}>
              Staking
            </SidebarLink>
          </Tippy>
          <SidebarLink to="/mobile/" onClick={toggle}>
            Whitepaper
          </SidebarLink>
          <Tippy content="To be announced">
            <SidebarLink to="/mobile/" onClick={toggle}>
              Presale
            </SidebarLink>
          </Tippy>
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
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #00FFFF;
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