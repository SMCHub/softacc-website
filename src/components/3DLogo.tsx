'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function OctahedronLogo() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <Octahedron ref={meshRef} args={[1, 0]} scale={1.5}>
        <meshStandardMaterial 
          color="#0070f3" 
          metalness={0.5}
          roughness={0.2}
          wireframe={false}
        />
      </Octahedron>
    </>
  );
}

export default function Logo3D() {
  return (
    <div className="w-full h-40 md:h-64 mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden relative">
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#5384ff" />
        <OctahedronLogo />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-2xl font-bold">
        Softacc
      </div>
    </div>
  );
} 