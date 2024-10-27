/* eslint-disable react/no-unknown-property */
// import { useControls } from 'leva'
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { fragment, vertex } from './shader'
import { useFrame } from '@react-three/fiber'
import { useAspect, useTexture } from '@react-three/drei'

function Model(props) {


 const arena=useRef()
 const texture =useTexture(props.src)
 const {width , height }=texture.image;


 const scale=useAspect(
    width,
    height,
    0.3
 )

 const{amplitude, waveLength}=({
    amplitude:{value:0.25, min:0, max:2, step:0.1},
    waveLength:{value:5, min:0, max:20, step:0.5}
 })

 const uniforms=useRef({
    uTexture:{value:texture},
    uTime:{value:0},
    uAmplitude:{value:amplitude},
    uWaveLength:{value:waveLength},
 })

  useFrame(()=>{
    arena.current.material.uniforms.uTime.value += 0.01;
   arena.current.material.uniforms.uWaveLength.value= 9;
   arena.current.material.uniforms.uAmplitude.value= 0.1;

  })
  
  return (
    <mesh ref={arena} scale={scale}>
        <planeGeometry args={[1,1,45,45]}/>
        {/* <meshBasicMaterial color={'white'}
        wireframe={true}/> */}
        <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        wireframe={false}
        uniforms={uniforms.current}
        />
    </mesh>
  )
}

export default Model