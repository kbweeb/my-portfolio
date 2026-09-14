"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 10
      temp[i * 3 + 1] = (Math.random() - 0.5) * 10
      temp[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001
      mesh.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#222222"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

function DataFlowLines({ count = 20 }) {
  const lines = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      speed: 0.01 + Math.random() * 0.02,
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      direction: new THREE.Vector3(1, 0, 0).applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        Math.random() * Math.PI * 2
      ),
      length: 1 + Math.random() * 2,
    }))
  }, [count])

  return (
    <group>
      {lines.map((line, i) => (
        <Line key={i} {...line} />
      ))}
    </group>
  )
}

function Line({ speed, pos, direction, length }: any) {
  const mesh = useRef<THREE.Mesh>(null)
  const startPos = useMemo(() => pos.clone(), [pos])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.addScaledVector(direction, speed)
      if (mesh.current.position.distanceTo(startPos) > 10) {
        mesh.current.position.copy(startPos)
      }
    }
  })

  return (
    <mesh ref={mesh} position={pos}>
      <boxGeometry args={[length, 0.005, 0.005]} />
      <meshBasicMaterial color="#FF0000" transparent opacity={0.1} />
    </mesh>
  )
}

export default function TechnicalBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        <Particles count={2000} />
        <DataFlowLines count={30} />
      </Canvas>
    </div>
  )
}
