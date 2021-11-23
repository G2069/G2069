import * as React from "react"
import TLayout from "../../components/TLayout"
import Seo from "../../components/seo"
import TMobile from "../../components/Three/TMobile"
import Email from "../../components/Email"
import Footer from "../../components/Footer"

const Mobile = () => {
  return (
    <TLayout>
      <Seo title="Home" />
      <TMobile />
      <Email />
      <Footer />
    </TLayout>
  )
}

export default Mobile
