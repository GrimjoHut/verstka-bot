import { useState } from "react"
import ExHeader from "../../Components/ExecutionComponents/ExHeader/ExHeader"
import LongWay from "../../Components/ExecutionComponents/LongWay/LongWay"
import "./Execution.css"
import StopPoint from "../../Components/ExecutionComponents/StopPoint/StopPoint"

function Execution() {

    
    const [FillerNumb, setFillerNumb] = useState<number>(0)

    const DownButton = () => {
        window.scrollBy(0, window.innerHeight*51)
        if (FillerNumb < 3)
        setFillerNumb(FillerNumb+1)
    }

    return (
        <body>
            <div className="ContainerBut"><ExHeader /><button onClick={DownButton} className="ButtonRoll">FD</button></div>
            <LongWay FillerNumb={FillerNumb} BackStyle="Dirt" NowayNumber={0}/>
            <StopPoint />
            <LongWay FillerNumb={FillerNumb}BackStyle="Half" NowayNumber={1}/>
            <StopPoint />
            <LongWay FillerNumb={FillerNumb} BackStyle="Hell" NowayNumber={2}/>
        </body>
    )
};

export default Execution