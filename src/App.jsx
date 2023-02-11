import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import LeftBar from "./components/leftBar/LeftBar";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <LeftBar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
