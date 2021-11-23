import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text, useGLTF, PerspectiveCamera } from "@react-three/drei"
import {
  EffectComposer,
  SSAO,
  Bloom,
  Glitch,
} from "@react-three/postprocessing"
import { KernelSize, BlendFunction } from "postprocessing"
import { RectAreaLightUniformsLib } from "three-stdlib"
import styled from "styled-components"
import Background from "./Background"

export const Lights = () => {
  const lights = useRef()
  return (
    <>
      <directionalLight
        intensity={1}
        position={[2, 2, 0]}
        color="red"
        distance={5}
      />
      <spotLight
        intensity={1.5}
        position={[-5, 10, 2]}
        angle={0.7}
        penumbra={1}
        shadow-mapSize={[2048, 2048]}
      />
      <group ref={lights}>
        <rectAreaLight
          intensity={2}
          position={[4.5, 0, -3]}
          width={10}
          height={10}
        />
        <rectAreaLight
          intensity={2}
          position={[-10, 2, -10]}
          width={15}
          height={15}
        />
      </group>
    </>
  )
}

export function Effects() {
  const ref = useRef()
  useFrame((state) => {
    // Disable SSAO on regress
    ref.current.blendMode.setBlendFunction(state.performance.current < 1 ? BlendFunction.SKIP : BlendFunction.MULTIPLY)
  }, [])
  return (
    <EffectComposer multisampling={8}>
      <SSAO
        ref={ref}
        intensity={15}
        radius={10}
        luminanceInfluence={0}
        bias={0.035}
      />
      <Bloom
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.55}
        luminanceSmoothing={0.2}
        intensity={0.67}
      />
      <Glitch
        delay={[2.5, 4]}
        duration={[0.2, 0.5]}
        ratio={[0.1]}
        strength={[0.01, 0.1]}
      />
    </EffectComposer>
  )
}

function useLerpedMouse() {
  const mouse = useThree(state => state.mouse)
  const lerped = useRef(mouse.clone())
  const previous = new THREE.Vector2()
  useFrame(state => {
    previous.copy(lerped.current)
    lerped.current.lerp(mouse, 0.1)
    // Regress system when the mouse is moved
    if (!previous.equals(lerped.current)) state.performance.regress()
  })
  return lerped
}

//------------------GLB-MODEL-------------------------------------//
function Lvbu({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/final-scene.glb")
  const mouse = useLerpedMouse()

  useFrame(state => {
    group.current.rotation.y = (mouse.current.x * Math.PI) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Camera"
        position={[0.96, 55.97, 132.61]}
        rotation={[1.57, 0, -0.01]}
      >
        <PerspectiveCamera
          makeDefault={false}
          far={1000}
          near={0.1}
          fov={22.9}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh geometry={nodes.shirt.geometry} material={nodes.shirt.material} />
      <mesh geometry={nodes.belt.geometry} material={nodes.belt.material} />
      <mesh geometry={nodes.body.geometry} material={nodes.body.material} />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["yellow emission"]}
      />
      <mesh
        geometry={nodes.Cylinder002_1.geometry}
        material={nodes.Cylinder002_1.material}
      />
      <mesh
        geometry={nodes.sharingan_button.geometry}
        material={nodes.sharingan_button.material}
      />
      <mesh
        geometry={nodes.body001.geometry}
        material={nodes.body001.material}
      />
      <mesh
        geometry={nodes.body002.geometry}
        material={nodes.body002.material}
      />
      <mesh
        geometry={nodes.body003.geometry}
        material={nodes.body003.material}
      />
      <mesh
        geometry={nodes.between_chest.geometry}
        material={materials["chest-cf"]}
      />
      <mesh geometry={nodes.chest.geometry} material={nodes.chest.material} />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials["side-cf"]}
      />
      <mesh
        geometry={nodes.shoulder_.geometry}
        material={nodes.shoulder_.material}
      />
      <mesh
        geometry={nodes.shoulder_001.geometry}
        material={nodes.shoulder_001.material}
      />
      <mesh
        geometry={nodes.shoulder_002.geometry}
        material={nodes.shoulder_002.material}
      />
      <mesh
        geometry={nodes.shoulder_003.geometry}
        material={nodes.shoulder_003.material}
      />
      <mesh
        geometry={nodes.NurbsPath035.geometry}
        material={nodes.NurbsPath035.material}
      />
      <mesh
        geometry={nodes.NurbsPath035_1.geometry}
        material={nodes.NurbsPath035_1.material}
      />
      <mesh
        geometry={nodes.cable002.geometry}
        material={materials["cable-cf"]}
      />
      <mesh
        geometry={nodes.butt_stripe1.geometry}
        material={materials["butt-stripe-cf"]}
      />
      <mesh
        geometry={nodes.knee_guard003.geometry}
        material={materials["leg-guard-cf"]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
      />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials.glass} />
      <mesh
        geometry={nodes.Cube001_2.geometry}
        material={materials["silver.001"]}
      />
      <mesh
        geometry={nodes.new_helmet002.geometry}
        material={nodes.new_helmet002.material}
      />
      <mesh
        geometry={nodes.new_helmet003.geometry}
        material={nodes.new_helmet003.material}
      />
      <mesh
        geometry={nodes.new_helmet004.geometry}
        material={nodes.new_helmet004.material}
      />
      <mesh
        geometry={nodes.knife001.geometry}
        material={materials.emarald}
        position={[144.12, 47.85, 0]}
        rotation={[-3, -1.48, -1.43]}
        scale={[0.86, 3.37, 0.73]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[144.12, 47.85, 0]}
        rotation={[Math.PI, -1.48, Math.PI]}
        scale={0.96}
      />
      <mesh
        geometry={nodes.eye.geometry}
        material={materials["Material.004"]}
        position={[144.12, 47.85, 0]}
        rotation={[-1.55, 0.17, -1.66]}
        scale={[0.8, 0.78, 1.31]}
      />
      <mesh
        geometry={nodes.handle.geometry}
        material={materials.metal}
        position={[144.12, 47.85, 0]}
        rotation={[0, -0.97, 0]}
        scale={0.96}
      />
      <mesh
        geometry={nodes.head.geometry}
        material={nodes.head.material}
        position={[144.12, 47.85, 0]}
        rotation={[-1.55, 0.17, -1.66]}
        scale={[0.8, 0.78, 1.31]}
      />
      <mesh
        geometry={nodes.tooth.geometry}
        material={nodes.tooth.material}
        position={[144.12, 47.85, 0]}
        rotation={[3.04, -1.48, 3.04]}
        scale={[1.54, 0.96, 0.96]}
      />
      <mesh
        geometry={nodes.Torus.geometry}
        material={nodes.Torus.material}
        position={[144.12, 47.85, 0]}
        rotation={[Math.PI, -1.48, Math.PI]}
        scale={0.78}
      />
      <mesh
        geometry={nodes.forearm.geometry}
        material={nodes.forearm.material}
      />
      <mesh geometry={nodes.shoe.geometry} material={nodes.shoe.material} />
      <mesh
        geometry={nodes.Plane014.geometry}
        material={nodes.Plane014.material}
      />
      <mesh
        geometry={nodes.Plane014_1.geometry}
        material={materials["shoe-button-emmit"]}
      />
      <mesh
        geometry={nodes.shoe004.geometry}
        material={nodes.shoe004.material}
      />
      <mesh
        geometry={nodes.shoe006.geometry}
        material={nodes.shoe006.material}
      />
      <mesh
        geometry={nodes.shoe002.geometry}
        material={nodes.shoe002.material}
      />
      <mesh
        geometry={nodes.shoe003.geometry}
        material={nodes.shoe003.material}
      />
      <mesh
        geometry={nodes.shoe005.geometry}
        material={nodes.shoe005.material}
      />
      <mesh
        geometry={nodes.shoe007.geometry}
        material={nodes.shoe007.material}
      />
    </group>
  )
}
//------------------END-OF-GLB-MODEL-------------------------------------//

const Three = () => {
  return (
    <ThreeContainer>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <color attach="background" args={["lightblue"]} />
        <Lights />
        <Suspense fallback={null}>
          <Lvbu position={[-2, -5.9, 0]} scale={0.1} />
          <Text
            position={[0, -0.3, -2]}
            fontSize={2}
            color="white"
            material-fog={false}
            letterSpacing={0.1}
            font="/orbitron.bold.ttf"
          >
            G-2069
          </Text>
          <Text
            position={[1.3, 1, 0]}
            fontSize={0.5}
            color="black"
            font="/Cyberpunk.ttf"
          >
            NFT
          </Text>
          <Text
            position={[1.3, 0.6, 0]}
            fontSize={0.5}
            color="black"
            font="/Cyberpunk.ttf"
          >
            Play to Earn
          </Text>
          <Text
            position={[1.3, 0.15, 0]}
            fontSize={0.33}
            color="black"
            font="/Cyberpunk.ttf"
          >
            Conquer your metaverse
          </Text>
          <Text
            position={[1.3, -0.15, 0]}
            fontSize={0.33}
            color="black"
            font="/Cyberpunk.ttf"
          >
            world now
          </Text>
        </Suspense>
        <Background />
        <Effects />
      </Canvas>
    </ThreeContainer>
  )
}

export default Three

export const ThreeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  height: 100vh;
  position: relative;
  margin-top: -80px;
  color: #fff;

  @media screen and (max-width: 768px) {
    position: 1 1 auto;
  }
`
