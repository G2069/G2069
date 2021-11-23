import * as React from "react"
import Seo from "../components/seo"
import styled from "styled-components"
import error from '../images/coin.png'

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <ErrorBg>
      <ErrorImg src={error} />
      <ErrorP>404 Error</ErrorP>
      <ErrorH1>Page not Found</ErrorH1>
    </ErrorBg>
    </>
    
)

export default NotFoundPage

const ErrorBg = styled.div`
height: 968px;
width: 100%;
background-color: #000000;
`

const ErrorImg = styled.img`
align-items: center;
height: 50%;
width: 50%;
margin-left: 450px;
`

const ErrorP = styled.p`
font-size: 70px;
color: #fff;
text-align: center;
`

const ErrorH1 = styled.h1`
font-size: 20px;
color: #fff;
text-align: center;
`