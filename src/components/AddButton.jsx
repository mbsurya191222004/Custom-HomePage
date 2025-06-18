import { li } from 'motion/react-client';
import { stringify } from 'postcss';
import React from 'react'



export default function AddButton() {


  return (
    
    <div className="bg-[rgba(0,0,0,0.2)] p-2 m-2 rounded-lg text-white flex flex-col justify-around items-center h-20 w-18" onClick={()=>click()}>             
        <img height="70px" width="70px" src={"plus.svg"} alt="add"/>  
    </div>
    
  )
}
