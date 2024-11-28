import React, { useRef, useEffect, useState } from 'react'

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
        const startAudio = (e) => {
            if (!hasStarted && audioRef.current) {
                audioRef.current.play()
                setHasStarted(true)
                window.removeEventListener('click', startAudio)
                window.removeEventListener('touchstart', startAudio)
            }
        }

        window.addEventListener('click', startAudio)
        window.addEventListener('touchstart', startAudio)

        return () => {
            window.removeEventListener('click', startAudio)
            window.removeEventListener('touchstart', startAudio)
        }
    }, [hasStarted])

    return (
        <audio
            ref={audioRef}
            src={src}
            loop
            controls
            style={{
                position: 'absolute',
                bottom: '20px',
                left: '5%',
                width: '90%',
                zIndex: 999999
            }}
        />
    )
}

export default AudioPlayer