import "./StopPointWindow.css"
import { SinsArr, SinsMock } from "../../../../Mock/SinsMock";

import { useEffect, useState, Dispatch, SetStateAction } from "react"

export interface IStopPointWindowProps {
    setMainWindow: Dispatch<SetStateAction<number>>;
    curWindowNumber: number
}
const StopPointWindow: React.FC<IStopPointWindowProps> = ({setMainWindow, curWindowNumber }) => {
    const [curWindowMod, setCurWindowMod] = useState<string>("Closed")

    const curSin: SinsMock | undefined = SinsArr.find(Content => Content.ID === curWindowNumber)
    
    const curAudio = new Audio(curSin?.music)
    

    const modChange = () => {
        if (curWindowMod === "Closed"){ 
            setCurWindowMod("Opened")
            setMainWindow(curWindowNumber)
        }
        if (curWindowMod === "Opened") {
            setCurWindowMod("Closed")
            setMainWindow(0)
        }
    }
    const stopMouseEnter = () => {
            curAudio.play();
            curAudio.loop = true
            //particle start, music start
    }
    const stopMouseLeave = () => {
        if (curWindowMod === "Closed"){
            curAudio.pause()
        }
    }
    return (
        <div onMouseEnter={stopMouseEnter}
             onMouseLeave={stopMouseLeave} 
             className={`stopWindow ${curWindowMod}`}
             style={{backgroundImage: `url(${curSin?.background})`}}>
            <button className="buttonWindow" onClick={modChange}></button>
        </div>
        )
}

export default StopPointWindow
