import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Page1 from "./Pages/MainPage/Page1"
import TestPage from "./Pages/TestPage"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="pageContainer">
          <Routes>
            <Route path="MainPage/Page1" element={<Page1 />}></Route>
            <Route path="Test" element={<TestPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
