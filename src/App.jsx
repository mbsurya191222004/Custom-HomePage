import { useEffect, useState } from 'react'
import Video from './components/video';
import QuickAccess from './components/QuickAccess';


function App() {
  useEffect(
    () => {
      document.body.style.overflow = 'hidden';
    },[]
  )

  return (
    <>
        <Video/>
        <QuickAccess/>
    </>
  )
}

export default App
