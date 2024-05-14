import "./StopPointWindow.css"

import { useEffect, useState, Dispatch, SetStateAction } from "react"

export interface IStopPointWindowProps {
    mainWindow: number;
    setMainWindow: Dispatch<SetStateAction<number>>;
    curWindowNumber: number
}
const StopPointWindow: React.FC<IStopPointWindowProps> = ({ mainWindow, setMainWindow, curWindowNumber }) => {


    const [curWindowMod, setCurWindowMod] = useState<string>("windowClosed")

    const modChange = () => {
        if (curWindowMod === "windowClosed"){ 
            setCurWindowMod("windowOpened")
            setMainWindow(curWindowNumber)
        }
        if (curWindowMod === "windowOpened") {
            setCurWindowMod("windowClosed")
            setMainWindow(0)
        }
    }

    return (
        <div className={curWindowMod}>
            <button className="buttonWindow" onClick={modChange}></button>
        </div>
        )
}

export default StopPointWindow
