import "./Carousel.css";
import { ContentMock } from "./../../Mock/ContentMock"
import {  useState } from "react";

interface CarouselProps {
    CarouselArr: ContentMock | undefined;
}

const Carousel: React.FC<CarouselProps> = ({ CarouselArr }) => {
    const [curImage, setCurImage] = useState<number>(0);
    const [curEffectStyle, setCurEffectStyle] = useState<boolean>(false);

    const nextDelay = 820; // Задержка в миллисекундах (0.5 секунды)


    const NextBut = () => {
        if (CarouselArr && CarouselArr.Image) {
            const length = CarouselArr.Image.length;
            setCurImage((curImage + 1) % length);
            setCurEffectStyle(false)
        }
    };

    const PreviousBut = () => {
        if (CarouselArr && CarouselArr.Image) {
            const length = CarouselArr.Image.length;
            setCurImage((curImage - 1 + length) % length);
            setCurEffectStyle(false)
        }
    }

    const delayedNextBut = () => {
        setCurEffectStyle(true);
        setTimeout(NextBut, nextDelay);
    };

    const delayedPreviousBut = () => {
        setCurEffectStyle(true);
        setTimeout(PreviousBut, nextDelay);
    };

    return (
        <div className="CarouselContainer">
            <button className={`PrevButton ${CarouselArr?.Carousel ? 'active' : 'inactive'}`} onClick={delayedPreviousBut}>BLABLA</button>
            <div className={`effect ${curEffectStyle ? 'active' : 'inactive'}`}></div>
            <div className="CarouselCarousel">
                <img src={CarouselArr?.Image[curImage]}></img>
            </div>
            <button className={`NextButton ${CarouselArr?.Carousel ? 'active' : 'inactive'}`} onClick={delayedNextBut}>BLABLA</button>
        </div>
    );
}

export default Carousel;

