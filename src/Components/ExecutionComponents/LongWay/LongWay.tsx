import "./LongWay.css";
import { useEffect } from 'react';
import { useState } from 'react';

interface LongWayProps {
  NowayNumber: number;
  BackStyle: string;
  FillerNumb: number
}

const LongWay: React.FC<LongWayProps> = ({  NowayNumber, BackStyle, FillerNumb }) => {
  
  const [beerVisibility, setBeerVisibility] = useState<boolean>(true)
  
  const NoWayTxtArr = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
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

  useEffect (() => 
  {
    if ((NowayNumber == 2) && (FillerNumb == 0)) 
      setBeerVisibility(true)
      else setBeerVisibility(false)
  })
  return (
    <div className={`LongWayContainer ${BackStyle}`}>
     <div className="PhraseContainer">
      <span>{NoWayTxtArr[17-9+FillerNumb*3-NowayNumber*3]}</span>
     </div>
     <div className="PhraseContainer">
      <span>{NoWayTxtArr[17-9+FillerNumb*3-NowayNumber*3-1]}</span>
      <span style={{visibility: beerVisibility? "visible" : "hidden"}}>Ну ладно уже, попей пива <a href="">🍺</a></span>
     </div>
     <div className="PhraseContainer">
      <span>{NoWayTxtArr[17-9+FillerNumb*3-NowayNumber*3-2]}</span>
     </div>
    </div>
  );
};

export default LongWay
