import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const Presaletimer = () => {
  const [timerDays, setTimerDays] = useState("00")
  const [timerHours, setTimerHours] = useState("00")
  const [timerMinutes, setTimerMinutes] = useState("00")
  const [timerSeconds, setTimerSeconds] = useState("00")

  let interval = useRef()

  const startTimer = () => {
    const countdownDate = new Date("March 15, 2022 08:00:00").getTime()

    interval.current = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current)
      } else {
        //update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }

  // componentDidMount
  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <>
      <TimerContainer>
        <TimerBg>
          {/* <TimerVid autoPlay loop muted src={Video} type="video/mp4" /> */}
        </TimerBg>
        <TimerContent>
          <TimerH1>Presale coming on</TimerH1>
          <TimerH1>00:00 UTC, 15th March 2022</TimerH1>
          <ClockContainer>
            <ClockSection>
              <ClockP>{timerDays}</ClockP>
              <ClockP>
                <small>Days</small>
              </ClockP>
            </ClockSection>
            <span>:</span>
            <ClockSection>
              <ClockP>{timerHours}</ClockP>
              <ClockP>
                <small>Hours</small>
              </ClockP>
            </ClockSection>
            <span>:</span>
            <ClockSection>
              <ClockP>{timerMinutes}</ClockP>
              <ClockP>
                <small>Minutes</small>
              </ClockP>
            </ClockSection>
            <span>:</span>
            <ClockSection>
              <ClockP>{timerSeconds}</ClockP>
              <ClockP>
                <small>Seconds</small>
              </ClockP>
            </ClockSection>
          </ClockContainer>
        </TimerContent>
      </TimerContainer>
    </>
  )
}

export default Presaletimer

const TimerContainer = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`

const TimerBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const TimerVid = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000000;
`

const TimerContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TimerH1 = styled.h1`
  font-size: 2em;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.7em;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3em;
  }
`

const ClockContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 3em;
  padding: 3em;
  text-align: center;

  span {
    font-size: 3em;
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    margin-left: 2em;
    margin-right: 2em;
    padding: 3em 1em;

    span {
      font-size: 1.3em;
    }
  }
`

const ClockSection = styled.section``

const ClockP = styled.p`
  font-size: 3em;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1.7em;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3em;
  }
`
