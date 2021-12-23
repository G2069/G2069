import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Socialcard from "../components/Socialcard"
import Show from "../components/Three/Show"

const Intro = () => (
  <Layout>
    <Seo title="Intro" />
    <Show/>
    <Socialcard />
  </Layout>
)

export default Intro
