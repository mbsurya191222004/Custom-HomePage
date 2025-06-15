import { useState } from "react";

function QuickAccess() {
    const [Links,SetLinks]= useState([["ChatGPT","https://chatgpt.com/"],["YouTube","https://www.youtube.com/"]])
    const [Icons,SetIcons] = useState([])
    return (
        <div className="absolute m-12 p-3 bg-[rgba(0,0,0,0.5)]  rounded-2xl flex  justify-between top-[80%] left-[50%] translate-x-[-50%]">
            {
                Links.map(
                    (link)=>{
                        let domain=link[1];
                        let icon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
                        return (
                            <a href={link[1]}>
                                <div className="h-20 w-20 text-white">
                                <img src={icon} alt={link[0]} />
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