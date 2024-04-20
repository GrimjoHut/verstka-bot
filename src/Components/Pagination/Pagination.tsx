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

    //  const MaxCalc = Math.floor(ContentArr.length / 4) - pageNumb; //
    //  const MinCalc = pageNumb - 1; //

    const MaxCalc = 6 - pageNumb;
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
        <div className="paginationContainer">
            <li className={`${curPrev} long`}>1</li>
            <li className={`${curPrev} mid`}>{pageNumb - 2 == 0 ? `${pageNumb - 2}` : `...`}</li>
            <li className={`${curPrev} short`}>{pageNumb - 1}</li>
            <li className="curNumbs">{pageNumb}</li>
            <li className={`${curNext} short`}>{pageNumb + 1}</li>
            <li className={`${curNext} mid`}>{6 - pageNumb == 2 ? `${pageNumb + 2}` : `...`}</li>
            <li className={`${curNext} long`}>6</li>
        </div>
    );
};

export default Pagination;


/* <>
<li><Link to="/page/1">Page 1</Link></li>
<li><Link to="/page/2">Page 2</Link></li>
<li><Link to="/page/3">Page 3</Link></li>
*/