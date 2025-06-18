import { useState } from "react";
import { motion } from "motion/react";
import AddButton from "./AddButton";


function QuickAccess() {
    const [Links,SetLinks]= useState([["ChatGPT","https://chatgpt.com/"],["YouTube","https://www.youtube.com/"],["YT Music","https://music.youtube.com/"]])
    const [Icons,SetIcons] = useState([])
    return (
        <motion.div 
        initial = {{
            top : "150%",
            left : "50%",
        }}
        animate = {{
            top : "80%",
            left : "50%",

            transition : {
                duration : 1
            }
        }}
        className="absolute translate-x-[-50%] flex justify-evenly">
            {
                Links.map(
                    (link)=>{
                        let domain=link[1];
                        let icon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
                        return (
                            <a href={link[1]}>
                            <div className="bg-[rgba(0,0,0,0.2)] p-2 m-2 rounded-lg text-white flex flex-col justify-around items-center h-20 w-18">
                                <img height="30px" width="30px" src={icon} alt={link[0]}  className="m-1"/>
                                <p
                                className="text-[0.75rem] font-mono "
                                >
                                    {link[0]}
                                </p>
                            </div>
                            </a>
                        )
                    }
                )
            }
            
        </motion.div>
      );
}

export default QuickAccess;