import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./Pages/MainPage/Page1";
import TestPage from "./Pages/TestPage/TestPage";
import Execution from "./Pages/ExecutionPage/Execution";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="pageContainer">
          <Routes>
          <Route path="/page/:pageNumber" element={<Page1/>} />
            <Route path="/test" element={<TestPage />} />
           <Route path ="/Execution" element={<Execution />} /> 
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
