import React, { useRef } from "react"
import { Html } from "@react-three/drei"
import { Link } from "gatsby"
import CyberButton from "./CyberButton"
import styled from "styled-components"

const TBackground = props => {
  const ref = useRef()
  return (
    <mesh
      {...props}
      ref={ref}
      scale={15}
      position={[-1, 1, -2]}
    >
      <planeGeometry />
      <meshStandardMaterial
        color="lightblue"
        toneMapped={false}
        fog={false}
        envMapIntensity={0}
      />
      <Html portal={HtmlContainer} zIndexRange={[1, 0]}>
        <Link to="/mobile/intro">
          <CyberButton />
        </Link>
      </Html>
    </mesh>
  )
}

export default TBackground

const HtmlContainer = styled.div`
z-index: 1;
`