import React, { useState } from "react";
import Cirucs from "./../../Resources/Images/CircusPhon.jpg";
import "./Filler.css";
import { JokeArr, JokeMock } from "../../Mock/JokeMock";

interface FillerProps {
  JokeNumber: number;
}

const Filler: React.FC<FillerProps> = ({ JokeNumber }) => {


  const curJoke: JokeMock | undefined = JokeArr.find(Content => Content.ID === JokeNumber);

  const [curOpOpene1, serCurOpOpener1] = useState<boolean>(false)
  const [curOpOpene2, setCurOpOpener2] = useState<boolean>(false)

  return (
    <div className="JokeFiller">
      <img src={Cirucs} alt="Circus" />
      <div className="CircusContent">
      <button className="FirstOpener">fdsfdsf</button>
        <div className="CircusTxt">{JokeNumber}</div>
        <button className="SecondOpener"></button>
        <div className="CirusTxtAnswer"></div>
      </div>
    </div>
  );
}

export default Filler;
