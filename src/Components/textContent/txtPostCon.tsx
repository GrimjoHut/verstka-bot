import { ContentMock } from "../../Mock/ContentMock";
import "./txtPostCon.css"


interface TxtPostProps {
  TxtPropArr: ContentMock | undefined;
}

const TxtPostCon: React.FC<TxtPostProps> = ({ TxtPropArr }) => {

  return (
    <div className="txtCont" style={{ backgroundColor: TxtPropArr?.txtBackColor }}>
      <div className="txtContTxt">

      </div>
      <button></button>
      <div className="Hashtag"></div>
    </div>
  )
}

export default TxtPostCon




