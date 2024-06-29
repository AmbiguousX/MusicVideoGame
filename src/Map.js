import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function Map(props) {
  const { nodes, materials } = useGLTF('/city.glb');

  return (
    <RigidBody type="fixed" colliders="trimesh" ccd>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials.fasades}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93_1.geometry}
          material={materials.fasades2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93_2.geometry}
          material={materials.details}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93_3.geometry}
          material={materials.rails}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93_4.geometry}
          material={materials.base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93_5.geometry}
          material={materials.vehicles}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload('/city.glb');
