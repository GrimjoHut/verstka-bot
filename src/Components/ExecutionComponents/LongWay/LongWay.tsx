import "./LongWay.css";

interface LongWayProps {
  NowayNumber: number;
  BackStyle: string;
}

const LongWay: React.FC<LongWayProps> = ({  NowayNumber, BackStyle }) => {
  
  const NoWayTxtArr = [
    "АбуАбу",
    "fdfdf",
    "fdfdfd",
    "Fdfdfdsf",
    "АбуАбу",
    "fdfdf",
    "fdfdfd",
    "Fdfdfdsf",
    "АбуАбу",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];


  return (
    <div className={`LongWayContainer ${BackStyle}`}>
     <div className="PhraseContainer">
      <span>{NoWayTxtArr[17-9-NowayNumber*3]}</span>
     </div>
     <div className="PhraseContainer">
      <span>{NoWayTxtArr[17-9-NowayNumber*3-1]}</span>
     </div>
     <div className="PhraseContainer">
      <span>{NoWayTxtArr[17-9-NowayNumber*3-2]}</span>
     </div>
    </div>
  );
};

export default LongWay
