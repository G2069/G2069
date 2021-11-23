/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState } from "react"
import THeader from "./THeader"
import { GlobalStyle } from "./styles/Globalstyles"
import TSideBar from "./TSideBar"

const TLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <TSideBar isOpen={isOpen} toggle={toggle} />
      <THeader toggle={toggle} />
      <main>{children}</main>
    </>
  )
}

export default TLayout
