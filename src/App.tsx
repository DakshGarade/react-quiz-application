import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./component/StartPage/StartPage";
import MainPage from "./component/Mainpage/MainPage";
import Score from "./component/End-Page/endPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/endPage" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
