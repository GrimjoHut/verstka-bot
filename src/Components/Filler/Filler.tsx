import React, { useState } from "react";
import Cirucs from "./../../Resources/Images/CircusPhon.jpg";
import "./Filler.css";
import { JokeArr, JokeMock } from "../../Mock/JokeMock";

interface FillerProps {
  JokeNumber: number;
}

const Filler: React.FC<FillerProps> = ({ JokeNumber }) => {


  const curJoke: JokeMock | undefined = JokeArr.find(Content => Content.ID === JokeNumber);

  const [curOpOpener1, setCurOpOpener1] = useState<boolean>(false)
  const [curOpOpener2, setCurOpOpener2] = useState<boolean>(false)

  const FirstOpen = () => {
    //music
    setCurOpOpener1(true)
  }
  const SecondOpen = () => {
    //music
    setCurOpOpener2(true)
    //music
  }

  return (
    <div className="JokeFiller">
      <img src={Cirucs} alt="Circus" />
      <div className="CircusContent">
      <button className={`FirstOpener ${curOpOpener1? "Defused" : "notDefused"}`} onClick={FirstOpen}>🎪</button>
        <div className={`CircusTxt ${curOpOpener1? "notDefused" : "Defused"}`}>{curJoke?.questTxt}</div>
        <button className={`SecondOpener ${curOpOpener1? "notDefused" : "Defused"} ${curOpOpener2? "Defused" : "notDefused"}`} onClick={SecondOpen}>🤡</button>
        <div className={`CircusTxtAnswer ${curOpOpener2? "notDefused" : "Defused"}`}>{curJoke?.answerTxt}</div>
      </div>
    </div>
  );
}

export default Filler;
