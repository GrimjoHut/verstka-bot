import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentArr } from './../../Mock/ContentMock';
import "./Pagination.css"

interface PaginationProps {
    pageNumb: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageNumb }) => {
    const [curPrev, setCurPrev] = useState<string>("leftOnl");
    const [curNext, setCurNext] = useState<string>("")

      const MaxCalc = Math.floor(ContentArr.length / 4) - pageNumb; 
      const MinCalc = pageNumb - 1; 


    useEffect(() => {
        switch (MinCalc) {
            case 0:
                setCurPrev("Pnumb0")
                break;
            case 1:
                setCurPrev("Pnumb1")
                break;
            case 2:
                setCurPrev("Pnumb2")
                break;
            default:
                setCurPrev("Pnumb")
                break;
        }
    }, [pageNumb]);

    useEffect(() => {
        switch (MaxCalc) {
            case 0:
                setCurNext("Nnumb0")
                break;
            case 1:
                setCurNext("Nnumb1")
                break;
            case 2:
                setCurNext("Nnumb2")
                break;
            default:
                setCurNext("Nnumb")
                break;
        }
    }, [pageNumb]);

    return (
        <ul className="paginationContainer">
            <li className={`${curPrev} long`}><Link to={`/page/1`}>1</Link></li>
            {pageNumb - 2 < 3 ? 
    <li className={`${curPrev} mid`}> <Link to={`/page/${pageNumb-2}`}>{pageNumb - 2}</Link> </li> :
    <li className={`${curPrev} mid`}>...</li>
}
            <li className={`${curPrev} short`}><Link to={`/page/${pageNumb-1}`}>{pageNumb-1}</Link></li>
            <li style={{backgroundColor:"rgb(255, 255, 255)", color:"rgb(0, 0, 0)"}}>{pageNumb}</li>
            <li className={`${curNext} short`}><Link to={`/page/${pageNumb+1}`}>{pageNumb+1}</Link></li>
            {Math.floor(ContentArr.length / 4) - pageNumb === 2 ? 
    <li className={`${curNext} mid`}> <Link to={`/page/${pageNumb+2}`}>{pageNumb + 2}</Link> </li> :
    <li className={`${curNext} mid`}>...</li>
            }
            <li className={`${curNext} long`}><Link to={`/page/3`}>3</Link></li>
        </ul>
    );
};

export default Pagination;


/* <>
<li><Link to="/page/1">Page 1</Link></li>
<li><Link to="/page/2">Page 2</Link></li>
<li><Link to="/page/3">Page 3</Link></li>
*/