/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState } from "react"
import SideBar from "./TSideBar"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import "./Font/font.css"

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Orbitron';
}
`

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <main>{children}</main>
    </>
  )
}

export default Layout
