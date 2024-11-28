import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Noah.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01} position={[0, -.9, 0]}>
          <skinnedMesh
            castShadow
            receiveShadow
            name="avaturn_hair_0001"
            geometry={nodes.avaturn_hair_0001.geometry}
            material={materials['avaturn_hair_0_material.002']}
            skeleton={nodes.avaturn_hair_0001.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="avaturn_hair_1001"
            geometry={nodes.avaturn_hair_1001.geometry}
            material={materials['avaturn_hair_1_material.001']}
            skeleton={nodes.avaturn_hair_1001.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="avaturn_hair_2001"
            geometry={nodes.avaturn_hair_2001.geometry}
            material={materials['avaturn_hair_2_material.001']}
            skeleton={nodes.avaturn_hair_2001.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="avaturn_look_0001"
            geometry={nodes.avaturn_look_0001.geometry}
            material={materials['avaturn_look_0_material.003']}
            skeleton={nodes.avaturn_look_0001.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="avaturn_shoes_0001"
            geometry={nodes.avaturn_shoes_0001.geometry}
            material={materials['avaturn_shoes_0_material.003']}
            skeleton={nodes.avaturn_shoes_0001.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Body_Mesh001"
            geometry={nodes.Body_Mesh001.geometry}
            material={materials['Body.003']}
            skeleton={nodes.Body_Mesh001.skeleton}
          />
          <group name="Head_Mesh001">
            <skinnedMesh
              castShadow
              receiveShadow
              name="Eye_Mesh001"
              geometry={nodes.Eye_Mesh001.geometry}
              material={materials['Eyes.003']}
              skeleton={nodes.Eye_Mesh001.skeleton}
              morphTargetDictionary={nodes.Eye_Mesh001.morphTargetDictionary}
              morphTargetInfluences={nodes.Eye_Mesh001.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Eye_Mesh001_1"
              geometry={nodes.Eye_Mesh001_1.geometry}
              material={materials['EyeAO.003']}
              skeleton={nodes.Eye_Mesh001_1.skeleton}
              morphTargetDictionary={nodes.Eye_Mesh001_1.morphTargetDictionary}
              morphTargetInfluences={nodes.Eye_Mesh001_1.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Eye_Mesh001_2"
              geometry={nodes.Eye_Mesh001_2.geometry}
              material={materials['Eyelash.003']}
              skeleton={nodes.Eye_Mesh001_2.skeleton}
              morphTargetDictionary={nodes.Eye_Mesh001_2.morphTargetDictionary}
              morphTargetInfluences={nodes.Eye_Mesh001_2.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Eye_Mesh001_3"
              geometry={nodes.Eye_Mesh001_3.geometry}
              material={materials['Head.003']}
              skeleton={nodes.Eye_Mesh001_3.skeleton}
              morphTargetDictionary={nodes.Eye_Mesh001_3.morphTargetDictionary}
              morphTargetInfluences={nodes.Eye_Mesh001_3.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Eye_Mesh001_4"
              geometry={nodes.Eye_Mesh001_4.geometry}
              material={materials['Teeth.001']}
              skeleton={nodes.Eye_Mesh001_4.skeleton}
              morphTargetDictionary={nodes.Eye_Mesh001_4.morphTargetDictionary}
              morphTargetInfluences={nodes.Eye_Mesh001_4.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Eye_Mesh001_5"
              geometry={nodes.Eye_Mesh001_5.geometry}
              material={materials['Teeth.001']}
              skeleton={nodes.Eye_Mesh001_5.skeleton}
              morphTargetDictionary={nodes.Eye_Mesh001_5.morphTargetDictionary}
              morphTargetInfluences={nodes.Eye_Mesh001_5.morphTargetInfluences}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Noah.glb')