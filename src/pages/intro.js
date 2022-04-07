import * as React from "react"
import { graphql } from "gatsby"
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

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;