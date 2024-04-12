import { useState } from "react";
import { ContentMock } from "../../Mock/ContentMock";
import "./txtPostCon.css"


interface TxtPostProps {
  TxtPropArr: ContentMock | undefined;
  OpacityCont: boolean
}

const TxtPostCon: React.FC<TxtPostProps> = ({ TxtPropArr, OpacityCont }) => {


  return (
    <div className={OpacityCont? "txtCont" : "txtContHidden"} style={{ backgroundColor: TxtPropArr?.txtBackColor }}>
      <div className="txtContTxt">
        <span className="txtHeader" style={{ color: TxtPropArr?.fontColor}}>{TxtPropArr?.Header}</span>
        <span className="txtContCont" style={{ color: TxtPropArr?.fontColor}}>{TxtPropArr?.text}</span>
      </div>
      <div className="Hashtag">fdsfdsf</div>
    </div>
  )
}

export default TxtPostCon




