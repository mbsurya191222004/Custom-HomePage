import { useState } from "react";
import { motion } from "motion/react";


function QuickAccess() {
    const [Links,SetLinks]= useState([["ChatGPT","https://chatgpt.com/"],["YouTube","https://www.youtube.com/"]])
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
        className="absolute  translate-x-[-50%] flex justify-evenly">
            {
                Links.map(
                    (link)=>{
                        let domain=link[1];
                        let icon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
                        return (
                            <a href={link[1]}>
                            <div className="bg-[rgba(0,0,0,0.2)] p-2 rounded-lg text-white flex flex-col justify-around items-center scale-75">
                                <img height="50px" width="50px" src={icon} alt={link[0]} />
                                <p>{link[0]}</p>
                            </div>
                            </a>
                        )
                    }
                )
            }
                <div className="bg-[rgba(0,0,0,0.2)] p-2 rounded-lg text-white flex flex-col justify-center items-center  scale-75">             
                    <img height="70px" width="70px" src={"plus.svg"} alt="add"/>  
                </div>
        </motion.div>
      );
}

export default QuickAccess;