import { ContentMock } from "../../Mock/ContentMock";
import "./txtPostCon.css"


interface TxtPostProps {
  TxtPropArr: ContentMock | undefined;
}

const TxtPostCon: React.FC<TxtPostProps> = ({ TxtPropArr }) => {

  return (
    <div className="txtCont" style={{ backgroundColor: TxtPropArr?.txtBackColor }}>
      <div className="txtContTxt">
        <span>ffffffffffffffffffffffffffffffffffffff</span>
      </div>
      <button className="BackButton rounded-button">
        <span className="left-semicircle"></span>
        <span className="button-content">Hide</span>
        <span className="right-semicircle"></span>
      </button>
      <div className="Hashtag">fdsfdsf</div>
    </div>
  )
}

export default TxtPostCon




