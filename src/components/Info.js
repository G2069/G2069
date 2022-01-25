import React from "react"
import styled from "styled-components"

export const Info = ({
  heading,
  paragraphOne,
  paragraphTwo,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="G2069" />
        </ColumnRight>
      </Container>
    </Section>
  )
}

export const InfoOne = ({
  heading,
  paragraphOne,
  paragraphTwo,
  reverse,
  image,
}) => {
  return (
    <SectionOne>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="G2069" />
        </ColumnRight>
      </Container>
    </SectionOne>
  )
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: rgb(175, 229, 249);
  background: linear-gradient(
    0deg,
    rgba(175, 229, 249, 1) 0%,
    rgba(97, 126, 136, 1) 77%
  );
`
const SectionOne = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: rgb(175, 229, 249);
  background: linear-gradient(
    180deg,
    rgba(175, 229, 249, 1) 0%,
    rgba(97, 126, 136, 1) 77%
  );
`

const Container = styled.div`
  padding: 3rem calc((100vw - 1500px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.5;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: 50px;
  }

  p {
    margin-bottom: 2rem;
    font-size: 20px;
  }
`

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 120%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 95%;
    }
  }
`
