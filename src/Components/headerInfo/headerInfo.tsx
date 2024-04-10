import "./headerInfo.css"
import LogoMuhi from "./../../Resources/Images/LogoMuhi.png"

function HeaderList() {

  return (
    <div className="header-wrapper">
        <div className="wrapper-type-2">
            <div className="page-header">
              <div className="logo">
                <a href="https://www.youtube.com/watch?v=0sRiHF_VsUA">
                <img src={LogoMuhi} className="LogoMuhi"></img>
                <div className="project-name">
                  Э1-61
                  <div>Все мы просто мухи...</div>
                </div>
                </a>
              </div> 
              <div className="primary-menu">
              <nav>
                <ul>
                  <li className="menu-item"><a href="https://www.youtube.com/watch?v=0sRiHF_VsUA">Профиль</a></li>
                  <li className="menu-item"><a href="https://www.youtube.com/watch?v=0sRiHF_VsUA">Научная работа</a></li>
                  <li className="menu-item"><a href="https://www.youtube.com/watch?v=0sRiHF_VsUA">Поебень</a></li>
                  <li className="menu-item"><a href="https://www.youtube.com/watch?v=0sRiHF_VsUA">Срать</a></li>
                  <li className="menu-item"><a href="https://www.youtube.com/watch?v=0sRiHF_VsUA">Какать</a></li>
                  <li className="menu-item"><a href="https://www.youtube.com/watch?v=0sRiHF_VsUA">АУФ</a></li>
                </ul>
              </nav>
            </div>
            </div>
        </div>
        <div className="main-hello">
          <div className="wrapper-type-2">
            <div className="header-row">
            <div className="text">
              <h2>Бот круглый год</h2>
              <span className="HelloText">В группе Э1-(номер семестра)1 кафедры Энергомашиностроение ежедневно чилибасят десятки студентов Университета. Для многих, благодаря их наставникам – пивандопаллу и шаве, чиллибас становится неотъемлемой частью их образа жизни.</span>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeaderList
