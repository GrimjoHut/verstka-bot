import "./ContentStyle.css"
import { ContentArr, ContentMock } from "../../Mock/ContentMock"
import Carousel from "../Carousel/Carousel"
import TxtPostCon from "../textContent/txtPostCon";


function Content() {
  const CurPageNumber = 1;
  const ArrStart = CurPageNumber*4-4
 
  const curArray1: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart);
  const curArray2: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart+1);
  const curArray3: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart+2);
  const curArray4: ContentMock | undefined = ContentArr.find(Content => Content.ID === ArrStart+3);

  return (
    <div className="content-wrapper">
        <div className="contentPost">
          <Carousel CarouselArr={curArray1}/>
          <div className={curArray1?.Style}><TxtPostCon TxtPropArr={curArray1}/>g</div>
        </div>
    </div>
  )
}

export default Content
