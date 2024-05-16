import "./StopPointWindow.css"

import { useEffect, useState, Dispatch, SetStateAction } from "react"

export interface IStopPointWindowProps {
    mainWindow: number;
    setMainWindow: Dispatch<SetStateAction<number>>;
    curWindowNumber: number
}
const StopPointWindow: React.FC<IStopPointWindowProps> = ({ mainWindow, setMainWindow, curWindowNumber }) => {


    const [curWindowMod, setCurWindowMod] = useState<string>("Closed")

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

    return (
        <div className={`stopWindow ${curWindowMod}`}>
            <button className="buttonWindow" onClick={modChange}></button>
        </div>
        )
}

export default StopPointWindow
