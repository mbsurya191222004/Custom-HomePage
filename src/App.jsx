import { useEffect, useState } from 'react'

import QuickAccess from './components/QuickAccess';


function App() {
  useEffect(
    () => {
      document.body.style.overflow = 'hidden';
    },[]
  )

  return (
    <div className='h-[100%] w-[100%] scroll-m-0'>
      <QuickAccess/>
        <video 
          src="BG.mp4"
          autoPlay
          muted
          loop
          className="m-0 p-0 z-10"
        /> 
    </div>

  )
}

export default App
