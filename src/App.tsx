import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Page1 from "./Pages/MainPage/Page1"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="pageContainer">
          <Routes>
            <Route path="MainPage/Page1" element={<Page1 />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
