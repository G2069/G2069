/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useState } from "react"
 import Header from "./Header"
 import { GlobalStyle } from "./styles/Globalstyles"
 import SideBar from "./TSideBar"

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
