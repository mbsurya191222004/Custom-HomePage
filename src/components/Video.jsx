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
       className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
        src="BG.mp4" autoPlay muted loop height={screen}/> 
    </>
        
  )
}
