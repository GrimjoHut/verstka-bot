import { useState } from "react"
import "./StopPoint.css"
import StopPointWindow from "./StopPointWindow/StopPointWindow"

export interface IStopPointProps {
    //
}

const StopPoint: React.FC<IStopPointProps> = (props) => {
    const {} = props

    const [mainWindow, setMainWindow] = useState<number>(0)

    return (
        <div className="stopPoint">
            <div className="stopPointCont" style={{left: mainWindow==1 ? "0%": "5%"}}>
            <StopPointWindow setMainWindow={setMainWindow} curWindowNumber={1}/>
            </div>
            <div className="stopPointCont" style={{left: mainWindow==2 ? "0%": "30%"}}>
            <StopPointWindow setMainWindow={setMainWindow} curWindowNumber={2}/>
            </div>
            <div className="stopPointCont" style={{left: mainWindow==3 ? "0%": "55%"}}>
            <StopPointWindow setMainWindow={setMainWindow} curWindowNumber={3}/>
            </div>
            <div className="stopPointCont" style={{left: mainWindow==4 ? "0%" : "80%"}}>
            <StopPointWindow setMainWindow={setMainWindow} curWindowNumber={4}/>
            </div>
        </div>
    )
}

export default StopPoint
