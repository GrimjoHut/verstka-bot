import ExHeader from "../../Components/ExecutionComponents/ExHeader/ExHeader"
import LongWay from "../../Components/ExecutionComponents/LongWay/LongWay"
import "./Execution.css"

function Execution() {

    return (
        <body>
            <ExHeader />
            <LongWay BackStyle="Dirt" TextNumber={0} NowayNumber={0}/>
        </body>
    )
};

export default Execution