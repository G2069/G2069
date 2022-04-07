import React from "react"
import styled from "styled-components"
import youtubeimg from "../images/thumbnail-bighead.jpg"
import play from "../images/play-button.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Media = () => {
  const {t} = useTranslation()
  return (
    <Gallery>
      <Galleryh2>{t("trailer")}</Galleryh2>
      <GalleryBox>
        <GalleryVideo>
          <GalleryImg
            href="https://youtu.be/ohd_AMrgOjI"
            target="_blank"
            arial-label="G2069 Trailer"
          >
            <img src={play} alt="G2069 Trailer" />
          </GalleryImg>
        </GalleryVideo>
      </GalleryBox>
    </Gallery>
  )
}

export default Media

const Gallery = styled.div`
  background-color: #000;
`

const Galleryh2 = styled.h2`
  margin: 0 0 18px 15px;
  color: #fff;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.2;
  padding: 60px 0 10px 10px;
  position: relative;
  text-transform: uppercase;
`

const GalleryBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 35px;
  position: relative;
  user-select: none;
`

const GalleryVideo = styled.div`
  margin: 0 auto 30px;
  position: relative;
`

const GalleryImg = styled.a`
  align-items: center;
  background-size: cover;
  bottom: 0;
  display: flex;
  height: auto;
  justify-content: center;
  left: 0;
  position: relative;
  right: 0;
  top: 0;
  width: 100%;
  background-image: url(${youtubeimg});
  user-select: none;

  img {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    cursor: pointer;
    display: block;
    width: 100%;
    height: auto;
  }
`
