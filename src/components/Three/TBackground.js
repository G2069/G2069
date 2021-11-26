import React, { useRef } from "react"
import { Html } from "@react-three/drei"
import { Link } from "gatsby"
import CyberButton from "./CyberButton"

const TBackground = props => {
  const ref = useRef()
  return (
    <mesh
      {...props}
      ref={ref}
      scale={15}
      position={[-1.22, 1.5, -2]}
    >
      <planeGeometry />
      <meshStandardMaterial
        color="lightblue"
        toneMapped={false}
        fog={false}
        envMapIntensity={0}
      />
      <Html zIndexRange={[1, 0]}>
        <Link to="/mobile/intro">
          <CyberButton />
        </Link>
      </Html>
    </mesh>
  )
}

export default TBackground