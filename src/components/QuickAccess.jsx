import { useState } from "react";

function QuickAccess() {
    const [Links,SetLinks]= useState([["ChatGPT","https://chatgpt.com/"],["YouTube","https://www.youtube.com/"]])
    const [Icons,SetIcons] = useState([])
    return (
        <div className="absolute top-[80%] left-[50%] translate-x-[-50%] flex justify-evenly">
            {
                Links.map(
                    (link)=>{
                        let domain=link[1];
                        let icon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
                        return (
                            <a href={link[1]}>
                            <div className="bg-[rgba(0,0,0,0.2)] p-2 rounded-lg text-white flex flex-col justify-around items-center m-2">
                                
                                <img height="50px" width="50px" src={icon} alt={link[0]} />
                                <p>{link[0]}</p>
                            
                            
                            </div>
                            </a>
                            
                        )
                    }
                )
            }
        </div>
      );
}

export default QuickAccess;