import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/d00m.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            castShadow
            receiveShadow
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials['lambert2.001']}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="BottomTeeth"
            geometry={nodes.BottomTeeth.geometry}
            material={materials['lambert2.001']}
            skeleton={nodes.BottomTeeth.skeleton}
            morphTargetDictionary={nodes.BottomTeeth.morphTargetDictionary}
            morphTargetInfluences={nodes.BottomTeeth.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Face001"
            geometry={nodes.Face001.geometry}
            material={materials['lambert2.001']}
            skeleton={nodes.Face001.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Hat"
            geometry={nodes.Hat.geometry}
            material={materials['lambert2.001']}
            skeleton={nodes.Hat.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="LeftEye"
            geometry={nodes.LeftEye.geometry}
            material={materials['lambert2.001']}
            skeleton={nodes.LeftEye.skeleton}
            morphTargetDictionary={nodes.LeftEye.morphTargetDictionary}
            morphTargetInfluences={nodes.LeftEye.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="RightEye"
            geometry={nodes.RightEye.geometry}
            material={materials['lambert2.001']}
            skeleton={nodes.RightEye.skeleton}
            morphTargetDictionary={nodes.RightEye.morphTargetDictionary}
            morphTargetInfluences={nodes.RightEye.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="TopTeeth"
            geometry={nodes.TopTeeth.geometry}
            material={materials['lambert2.001']}
            skeleton={nodes.TopTeeth.skeleton}
            morphTargetDictionary={nodes.TopTeeth.morphTargetDictionary}
            morphTargetInfluences={nodes.TopTeeth.morphTargetInfluences}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/d00m.glb')