import React, { useState } from "react"
import styled from "styled-components"
import EmailBg from "../images/email-background.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Email = () => {
  const { t } = useTranslation()
  const [formState, setFormState] = useState({
    email: "",
  })

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => alert("thank you"))
      .catch(error => alert(error))
  }

  return (
    <EmailContainer>
      <EmailContent>
        <p>{t("register")}</p>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormWrap>
            <label htmlFor="email">
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="example@g2069.com"
              />
            </label>
            <Button>
              <button className="presale-btn" type="submit">
                Register<span aria-hidden>_</span>
                <span aria-hidden className="presale-btn__glitch">
                  Register
                </span>
              </button>
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
    180 deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
  );
  background-size: cover;
  height: 350px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${EmailBg});
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    color: black;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 0.7rem;
    color: #000000;
    font-weight: 600;
  }

  form {
    z-index: 10;
  }
`

const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 300px;
    height: 50px;
    border: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`

const Button = styled.div`
  align-items: center;
  @font-face {
    font-family: Cyber;
    src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
    font-display: swap;
  }

  .presale-btn {
    --primary: hsl(
      var(--primary-hue),
      85%,
      calc(var(--primary-lightness, 50) * 1%)
    );
    --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
    --primary-hue: 0;
    --primary-lightness: 50;
    --color: hsl(0, 0%, 100%);
    --font-size: 26px;
    --shadow-primary-hue: 180;
    --label-size: 9px;
    --shadow-secondary-hue: 60;
    --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
    --border: 4px;
    --shimmy-distance: 5;
    --clip-one: polygon(
      0 2%,
      100% 2%,
      100% 95%,
      95% 95%,
      95% 90%,
      85% 90%,
      85% 95%,
      8% 95%,
      0 70%
    );
    --clip-two: polygon(
      0 78%,
      100% 78%,
      100% 100%,
      95% 100%,
      95% 90%,
      85% 90%,
      85% 100%,
      8% 100%,
      0 78%
    );
    --clip-three: polygon(
      0 44%,
      100% 44%,
      100% 54%,
      95% 54%,
      95% 54%,
      85% 54%,
      85% 54%,
      8% 54%,
      0 54%
    );
    --clip-four: polygon(
      0 0,
      100% 0,
      100% 0,
      95% 0,
      95% 0,
      85% 0,
      85% 0,
      8% 0,
      0 0
    );
    --clip-five: polygon(
      0 0,
      100% 0,
      100% 0,
      95% 0,
      95% 0,
      85% 0,
      85% 0,
      8% 0,
      0 0
    );
    --clip-six: polygon(
      0 40%,
      100% 40%,
      100% 85%,
      95% 85%,
      95% 85%,
      85% 85%,
      85% 85%,
      8% 85%,
      0 70%
    );
    --clip-seven: polygon(
      0 63%,
      100% 63%,
      100% 80%,
      95% 80%,
      95% 80%,
      85% 80%,
      85% 80%,
      8% 80%,
      0 70%
    );
    font-family: "Cyber", sans-serif;
    color: var(--color);
    cursor: pointer;
    background: transparent;
    text-transform: uppercase;
    font-size: var(--font-size);
    outline: transparent;
    letter-spacing: 2px;
    position: relative;
    font-weight: 700;
    border: 0;
    width: 150px;
    height: 50px;
    line-height: 50px;
    transition: 0.2s;
    top: 20px;
    margin-left: 75px;
  }

  .presale-btn:hover {
    --primary: hsl(
      var(--primary-hue),
      85%,
      calc(var(--primary-lightness, 50) * 0.8%)
    );
  }
  .presale-btn:active {
    --primary: hsl(
      var(--primary-hue),
      85%,
      calc(var(--primary-lightness, 50) * 0.6%)
    );
  }

  .presale-btn:after,
  .presale-btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: var(--clip);
    z-index: -1;
  }

  .presale-btn:before {
    background: var(--shadow-primary);
    transform: translate(var(--border), 0);
  }

  .presale-btn:after {
    background: var(--primary);
  }

  .presale-btn__glitch {
    position: absolute;
    top: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    right: calc(var(--border) * -1);
    bottom: calc(var(--border) * -1);
    background: var(--shadow-primary);
    text-shadow: 2px 2px var(--shadow-primary),
      -2px -2px var(--shadow-secondary);
    clip-path: var(--clip);
    animation: glitch 2s infinite;
    display: none;
  }

  .presale-btn:hover .presale-btn__glitch {
    display: block;
  }

  .presale-btn__glitch:before {
    content: "";
    position: absolute;
    top: calc(var(--border) * 1);
    right: calc(var(--border) * 1);
    bottom: calc(var(--border) * 1);
    left: calc(var(--border) * 1);
    clip-path: var(--clip);
    background: var(--primary);
    z-index: -1;
  }

  @keyframes glitch {
    0% {
      clip-path: var(--clip-one);
    }
    2%,
    8% {
      clip-path: var(--clip-two);
      transform: translate(calc(var(--shimmy-distance) * -1%), 0);
    }
    6% {
      clip-path: var(--clip-two);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    9% {
      clip-path: var(--clip-two);
      transform: translate(0, 0);
    }
    10% {
      clip-path: var(--clip-three);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    13% {
      clip-path: var(--clip-three);
      transform: translate(0, 0);
    }
    14%,
    21% {
      clip-path: var(--clip-four);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    25% {
      clip-path: var(--clip-five);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    30% {
      clip-path: var(--clip-five);
      transform: translate(calc(var(--shimmy-distance) * -1%), 0);
    }
    35%,
    45% {
      clip-path: var(--clip-six);
      transform: translate(calc(var(--shimmy-distance) * -1%));
    }
    40% {
      clip-path: var(--clip-six);
      transform: translate(calc(var(--shimmy-distance) * 1%));
    }
    50% {
      clip-path: var(--clip-six);
      transform: translate(0, 0);
    }
    55% {
      clip-path: var(--clip-seven);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    60% {
      clip-path: var(--clip-seven);
      transform: translate(0, 0);
    }
    31%,
    61%,
    100% {
      clip-path: var(--clip-four);
    }
  }

  .presale-btn:nth-of-type(2) {
    --primary-hue: 260;
  }

  @media screen and (max-width: 768px) {
    .presale-btn {
      margin-left: 12px;
      top: 0px;
    }
  }
`
