import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Three from "../components/Three/Three"
import Email from "../components/Email"
import Footer from "../components/Footer"
import TMobile from "../components/Three/TMobile"
import Socialcard from "../components/Socialcard"
import ImageSlider from "../components/ImageSlider"

const IndexPage = () => {
  const [isDesktop, setDesktop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 768)
    }
  }, [])

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })
  return (
    <Layout>
      <Seo title="Home" description="G2069 metaverse" />
      {isDesktop ? <Three /> : <TMobile />}
      <ImageSlider />
      <Email />
      <Footer />
      <Socialcard />
    </Layout>
  )
}

export default IndexPage
