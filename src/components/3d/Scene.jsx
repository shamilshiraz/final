import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'
import './Gallery.css'

function Scene(props) {
  return (
    <div className="canva">
    <Canvas>
        <Model src={props.src} />
    </Canvas>
    </div>

  )
}

export default Scene