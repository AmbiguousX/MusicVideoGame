import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function Map({ onLoaded, ...props }) {
  const { nodes, materials } = useGLTF('/tblisis.glb', true);

  useEffect(() => {
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

  return (
    <RigidBody type="fixed" colliders="trimesh" ccd>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={materials.Material_0}
          position={[0, -0.854, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.002']}
          position={[0, -4.921, 0]}
          scale={20.498}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
          position={[10.858, -1.451, 2.237]}
          scale={[1, 1, 8.255]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload('/tblisis.glb');