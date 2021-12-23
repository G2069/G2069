import React from "react"
import styled from "styled-components"
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa"

const Socialcard = () => {
  return (
    <SocialBar>
      <SocialBox>
          <SocialList>
          <SocialIconLink1
            href="https://twitter.com/2069G"
            target="_blank"
            arial-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink1>
          </SocialList>
          <SocialList>
          <SocialIconLink2
            href="https://t.me/+ssdOu3KiuM40ZmY1"
            target="_blank"
            arial-label="Telegram"
          >
            <FaTelegram />
          </SocialIconLink2>
          </SocialList>
          <SocialList>
          <SocialIconLink3
            href="https://discord.gg/MjGkMSgWAk"
            target="_blank"
            arial-label="Discord"
          >
            <FaDiscord />
          </SocialIconLink3>
          </SocialList>
      </SocialBox>
    </SocialBar>
  )
}

export default Socialcard

const SocialBar = styled.div`
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const SocialBox = styled.div`
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
  background-color: lightskyblue;
`

const SocialIconLink1 = styled.a`
  color: #fff;
  font-size: 30px;

  &:hover {
    color: #00acee;
    transition: 0.3s ease-out;
  }
`

const SocialIconLink2 = styled.a`
  color: #fff;
  font-size: 30px;

  &:hover {
    color: #0088cc;
    transition: 0.3s ease-out;
  }
`

const SocialIconLink3 = styled.a`
  color: #fff;
  font-size: 30px;

  &:hover {
    color: #7289d9;
    transition: 0.3s ease-out;
  }
`

const SocialList = styled.li`
list-style: none;
margin-top: 5px;
`