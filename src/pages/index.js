import * as React from "react"
import Seo from "../components/seo"
import { GlobalStyle } from "../components/styles/Globalstyles"
import Switch from "../components/Switch"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Seo title="Device" />
    <Switch />
  </>
)

export default IndexPage
