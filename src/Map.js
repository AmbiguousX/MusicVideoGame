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

        <group position={[0, -1.906, -20.806]} rotation={[-Math.PI, 0.349, -Math.PI]} scale={0.007}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel_R_04_Tracks_Wheels_psd_0_1.geometry}
            material={materials.Tracks_Wheels_psd}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel_R_04_Tracks_Wheels_psd_0_2.geometry}
            material={materials.T_72_D1_psd}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel_R_04_Tracks_Wheels_psd_0_3.geometry}
            material={materials['tripo_mat_0c8c0a7b-dd5e-41d2-8811-e0f8e17a6440']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel_R_04_Tracks_Wheels_psd_0_4.geometry}
            material={materials.Tank}
          />
        </group>

      </group>
    </RigidBody>
  );
}

useGLTF.preload('/tblisis.glb');