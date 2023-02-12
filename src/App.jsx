import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import LeftBar from "./components/leftBar/LeftBar";
import { Routes, Route } from "react-router-dom";
import Video from "./components/video/Video";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <LeftBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch/:id" element={<Video />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
