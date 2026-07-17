import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import { Model } from "./Realistic_human_heart";

export default function HeartCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 35,
        }}
        gl={{ alpha: true }}
      >
        {/* Ambient light */}
        <ambientLight intensity={2.5} />

        {/* Main light */}
        <directionalLight position={[5, 5, 5]} intensity={3} />

        {/* Fill light */}
        <directionalLight position={[-4, 2, 3]} intensity={1.5} />

        {/* Rim light */}
        <pointLight position={[0, 2, 5]} intensity={2} />

        {/* Nice reflections */}
        <Environment preset="studio" />

        {/* Floating Heart */}
        <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.4}>
          <Model position={[0, -0.01, 0]} />
        </Float>

        {/* Rotation only */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={4}
          maxDistance={4}
          rotateSpeed={0.8}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
}
