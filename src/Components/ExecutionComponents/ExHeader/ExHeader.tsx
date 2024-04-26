import "./ExHeader.css"

function ExHeader() {

    const scrollToPosition = () => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); // Получаем текущий размер vh в пикселях
        window.scrollTo({
          top: window.scrollY + (1100 * vh), // Прокручиваем на 900 vh
          behavior: 'smooth', // Плавный скроллинг
        });
    };
    

    return (

        <div className="ExHeaderContainer">
            <div className="GradientEffect"></div>
            <div className="ExHeaderHeader">
            <button>FDFD</button>
            <span>Novikov Place</span>
            <button>FDFD</button>
            </div>
            <div className="ExHeaderFooter">
            <span>Его мощь неоспорима, он повелитель смерти<p>Повесть временных лет</p></span>
            <button onClick={scrollToPosition}>F</button>
            </div>
        </div>
    )
};

export default ExHeader


//Спуск в ад
// Секретки