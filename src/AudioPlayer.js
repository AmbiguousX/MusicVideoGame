import React, { useRef, useEffect } from 'react'

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null)

    useEffect(() => {
        const handleInteraction = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.error("Audio play failed:", error)
                })
            }
        }

        // Add event listener for user interaction
        window.addEventListener('click', handleInteraction)
        window.addEventListener('keydown', handleInteraction)

        return () => {
            window.removeEventListener('click', handleInteraction)
            window.removeEventListener('keydown', handleInteraction)
        }
    }, [])

    return (
        <audio ref={audioRef} src={src} loop />
    )
}

export default AudioPlayer
