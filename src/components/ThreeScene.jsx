import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import './ThreeScene.css'

function FloatingShape({ position, color, shape = 'box' }) {
  const meshRef = useRef()

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef} position={position}>
        {shape === 'box' ? (
          <boxGeometry args={[1, 1, 1]} />
        ) : shape === 'sphere' ? (
          <sphereGeometry args={[0.5, 32, 32]} />
        ) : (
          <torusGeometry args={[0.5, 0.2, 16, 100]} />
        )}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function ThreeScene() {
  return (
    <div className="three-scene-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#9F64FF" intensity={0.5} />
        
        <Stars radius={300} depth={60} count={2000} factor={7} fade speed={1} />
        
        <FloatingShape 
          position={[-2, 1, 0]} 
          color="#9F64FF" 
          shape="box"
        />
        <FloatingShape 
          position={[2, -1, 0]} 
          color="#C048E8" 
          shape="sphere"
        />
        <FloatingShape 
          position={[0, 2, -1]} 
          color="#F7A845" 
          shape="torus"
        />
        <FloatingShape 
          position={[-1.5, -1.5, 1]} 
          color="#4BD6C5" 
          shape="box"
        />
        <FloatingShape 
          position={[1.5, 1, 1]} 
          color="#B7A6E1" 
          shape="sphere"
        />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default ThreeScene

