import React from "react"
import "./CyberButton.css"
import styled from "styled-components"
import { useTranslation } from "gatsby-plugin-react-i18next"

const CyberButton = () => {
  const { t } = useTranslation()
  return (
      <ButtonWrapper>
    <button className="cybr-btn">
    {t("explore")}<span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">
      {t("explore")}
      </span>
    </button>
    </ButtonWrapper>
  )
}

export default CyberButton


const ButtonWrapper = styled.div`
position: relative;
z-index: 1;
`