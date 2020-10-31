import React from "react";
import "./App.css";
import Profile from "./Profile";
import Projects from "./Projects";
import Languages from "./Languages";

function App() {
  return (
    <div className="app">
      <div className="window">
        <div className="upper">
          <div className="upperLeft">
            <img src={process.env.PUBLIC_URL + "Eunbae_Jeon.jpg"} alt="" />
            <div className="email">
              <h3>Contact</h3>
            </div>
          </div>
          <div className="upperRight">
            <Profile />
            <Languages />
          </div>
        </div>
        <div className="downside">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
