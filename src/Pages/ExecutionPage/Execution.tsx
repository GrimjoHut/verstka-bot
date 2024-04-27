import { useState } from "react"
import ExHeader from "../../Components/ExecutionComponents/ExHeader/ExHeader"
import LongWay from "../../Components/ExecutionComponents/LongWay/LongWay"
import "./Execution.css"

function Execution() {

    const [FillerNumb, setFillerNumb] = useState<number>(0)

    return (
        <body>
            <div className="ContainerBut"><ExHeader /><button className="ButtonRoll">FD</button></div>
            <LongWay BackStyle="Dirt" NowayNumber={0}/>
            <LongWay BackStyle="Half" NowayNumber={1}/>
            <LongWay BackStyle="Hell" NowayNumber={2}/>
        </body>
    )
};

export default Execution