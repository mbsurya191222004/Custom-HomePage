import React from 'react'
import { motion } from 'motion/react'

export default function  Video() {
  return (
    <>
        <motion.video 
        initial = {{
            opacity : 0, 
            scale : 1.5,
            background : "red"
        }}
        animate = {{
            
            opacity : 100,
            scale : 1,
            transition : {
                duration : 1
            }
        }}
        src="BG.mp4" autoPlay muted loop/> 
    </>
        
  )
}
