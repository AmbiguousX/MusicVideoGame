import React, { useRef } from 'react';

export default function Lights() {
  const pointLights = useRef([]);

  return (
    <>
      <directionalLight
        intensity={0.7}
        color={'#FFFFCC'}
        castShadow
        shadow-bias={-0.0004}
        position={[-20, 20, 20]}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      <ambientLight intensity={0.2} color="#FFFBCC" />



      <pointLight
        ref={(el) => (pointLights.current[0] = el)}
        intensity={.3}
        color="#FFFFDD"
        castShadow
        shadow-bias={-0.0004}
        position={[11.023600146402007, -1.4386822940538604, 9.144784479598881]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      <mesh position={[11.023600146402007, -1.4386822940538604, 9.144784479598881]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#FFFFDD" depthTest={false} depthWrite={false} />
      </mesh>

      <pointLight
        ref={(el) => (pointLights.current[1] = el)}
        intensity={.3}
        color="#FFFFDD"
        castShadow
        shadow-bias={-0.0004}
        position={[11.023600146402007, -1.4386822940538604, -2.0823108792107607]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      <mesh position={[11.023600146402007, -1.4386822940538604, -2.0823108792107607]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#FFFFDD" depthTest={false} depthWrite={false} />
      </mesh>
    </>
  );
}