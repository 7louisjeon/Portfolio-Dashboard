import React, { useState } from "react";
import "./Language.css";

function Language({ src, name, popupMessage }) {
  const [popUp, setPopUp] = useState(false);

  const handleClick = () => {
    {
      popUp == false ? setPopUp(true) : setPopUp(false);
    }
  };

  return (
    <div className="language">
      <img src={src} onClick={handleClick} />
      <h3>{name}</h3>
      {popUp == true && (
        <div className="popup" id="popup">
          <h2>&lt;{name}&gt;</h2>
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Language;
