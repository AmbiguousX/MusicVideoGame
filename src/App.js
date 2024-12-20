import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Environment, KeyboardControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense, useState, useEffect } from 'react'
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl'

import Lights from './Lights'
import Map from './Map'
import CharacterModel from './CharacterModel'
import AudioPlayer from './AudioPlayer';

export default function App() {
  const [mapLoaded, setMapLoaded] = useState(false);

  /**
   * Keyboard control preset
   */
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
    { name: 'action1', keys: ['1'] },
    { name: 'action2', keys: ['2'] },
    { name: 'action3', keys: ['3'] },
    { name: 'action4', keys: ['KeyF'] }
  ]

  /**
   * Character url preset
   */
  const characterURL = './d00m.glb'

  /**
   * Character animation set preset
   */
  const animationSet = {
    idle: 'Idle',
    walk: 'Walk',
    run: 'Run',
    jump: 'Jump',
    jumpIdle: 'Jump_Idle',
    jumpLand: 'Jump_Land',
    fall: "Jump_Idle",
  }

  return (
    <>
      <AudioPlayer src="/sowrong.mp3" />
      <EcctrlJoystick buttonNumber={1} joystickPositionBottom="50px" buttonPositionBottom="10px" />
      <Canvas shadows>
        <Perf position="top-left" minimal />
        <Environment background files="/night.hdr" />
        <Lights />
        <Suspense fallback={null}>
          <Physics timeStep="vary">
            <KeyboardControls map={keyboardMap}>
              {mapLoaded && (  // Only render character after map loads
                <Ecctrl animated position={[11, 7, 13]} rotation={[0, 180, 0]} >
                  <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                    <CharacterModel position={[0, -.95, 0]} />
                  </EcctrlAnimation>
                </Ecctrl>
              )}
              <Map onLoaded={() => setMapLoaded(true)} />
            </KeyboardControls>
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}