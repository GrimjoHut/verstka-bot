import "./ContentStyle.css"
import { ContentArr, ContentMock } from "../../Mock/ContentMock"
import Carousel from "../Carousel/Carousel"
import TxtPostCon from "../textContent/txtPostCon";
import { useState } from "react";
import AufPhrase from "../aufPhrase/aufPhrase";
import { AufArr, AufMock } from "../../Mock/AufMock";

function Content() {
  type StateFunction = React.Dispatch<React.SetStateAction<boolean>>;
  const [curText1Opacity, setCurText1Opacity] = useState<boolean>(true)
  const [curText2Opacity, setCurText2Opacity] = useState<boolean>(true)
  const [curText3Opacity, setCurText3Opacity] = useState<boolean>(true)
  const [curText4Opacity, setCurText4Opacity] = useState<boolean>(true)
  const CurPageNumber = 1;
  const ArrStart = CurPageNumber*4-4
  const curAufNumb = CurPageNumber-1

  const ChangeOp = (a: StateFunction) => {
    return () => {
      a(prevState => !prevState);
    };
  };  
  const curAuf: AufMock | undefined = AufArr.find(Auf => Auf.ID === curAufNumb)
  
  const curArray1: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart);
  const curArray2: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart+1);
  const curArray3: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart+2);
  const curArray4: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart+3);

  return (
    <div className="content-wrapper">
        <div className="aufPhrasePost">
          <AufPhrase Direction="Up" AufText={curAuf?.Auf1}/>
        </div>
        <div className="contentPost">
          <Carousel CarouselArr={curArray1}/>
          <div className={curArray1?.Style}><TxtPostCon OpacityCont={curText1Opacity} TxtPropArr={curArray1}/>
          <button className={curArray1?.textIncluded? "BackButton rounded-button" : "noButton"} 
          onClick={ChangeOp(setCurText1Opacity)}>
        <span className="left-semicircle"></span>
        <span className="button-content">{curText1Opacity? "Hide" : "Show"}</span>
        <span className="right-semicircle"></span>
      </button>
          </div>
        </div>
        <div className="aufPhrasePost">
          <AufPhrase Direction="Left" AufText={curAuf?.Auf2}/>
        </div>
        <div className={curArray2?.Empty? "noPost" : "contentPost"}>
          <Carousel CarouselArr={curArray2}/>
          <div className={curArray2?.Style}><TxtPostCon OpacityCont={curText2Opacity} TxtPropArr={curArray2}/>
          <button className={curArray2?.textIncluded? "BackButton rounded-button" : "noButton"} 
          onClick={ChangeOp(setCurText1Opacity)}>
        <span className="left-semicircle"></span>
        <span className="button-content">{curText2Opacity? "Hide" : "Show"}</span>
        <span className="right-semicircle"></span>
      </button>
          </div>
        </div>
        <div className="aufPhrasePost">
          <AufPhrase Direction="Right" AufText={curAuf?.Auf2}/>
        </div>
        <div className="aufPhrasePost">
          <AufPhrase Direction="Scale" AufText={curAuf?.Auf2}/>
        </div>
        <div className={curArray3?.Empty? "noPost" : "contentPost"}>
          <Carousel CarouselArr={curArray3}/>
          <div className={curArray3?.Style}><TxtPostCon OpacityCont={curText3Opacity} TxtPropArr={curArray3}/>
          <button className={curArray3?.textIncluded? "BackButton rounded-button" : "noButton"} 
          onClick={ChangeOp(setCurText3Opacity)}>
        <span className="left-semicircle"></span>
        <span className="button-content">{curText3Opacity? "Hide" : "Show"}</span>
        <span className="right-semicircle"></span>
      </button>
          </div>
        </div>
        <div className="aufPhrasePost">
          <AufPhrase Direction="Down" AufText={curAuf?.Auf4}/>
        </div>
        <div className={curArray4?.Empty? "noPost" : "contentPost"}>
          <Carousel CarouselArr={curArray4}/>
          <div className={curArray4?.Style}><TxtPostCon OpacityCont={curText4Opacity} TxtPropArr={curArray4}/>
          <button className={curArray4?.textIncluded? "BackButton rounded-button" : "noButton"} 
          onClick={ChangeOp(setCurText4Opacity)}>
        <span className="left-semicircle"></span>
        <span className="button-content">{curText4Opacity? "Hide" : "Show"}</span>
        <span className="right-semicircle"></span>
      </button>
          </div>
        </div>
    </div>
  )
}

export default Content
