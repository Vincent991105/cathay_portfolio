import BackgroundItem from "./assets/BackgroundItem";
import MenuBar from "./components/MenuBar";
import "./App.css";
import "./css/Mobile.css";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="App">
      <div className="Background">
        <BackgroundItem />
      </div>
      <div className="Main">
        {!isMobile && (
          <div className="Header">
            <div className="LogoSet">
              <img src="/Logo.png" alt="Logo" />
              <span>網路銀行</span>
            </div>
            <MenuBar />
          </div>
        )}
        <Outlet />
        {isMobile && <MenuBar type="Bottom" />}
      </div>
    </div>
  );
}

export default App;
