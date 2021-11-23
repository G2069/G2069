import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Three from "../../components/Three/Three"
import Email from "../../components/Email"
import Footer from "../../components/Footer"

const Desktop = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Three />
      <Email />
      <Footer />
    </Layout>
  )
}

export default Desktop
