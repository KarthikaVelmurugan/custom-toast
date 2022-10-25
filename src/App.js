import React, { useState } from "react";
import "./App.css";
import { CustomAlert } from "./lib";

function App() {
  // Initializing the alert state object with message and type as null
  const [alert, setalert] = useState({
    active: false,
    type: null,
    message: null,
  });

  // Trigger the custom toast window through onClick event
  const tiggerCustomToastWindow = () => {
    setalert({
      active: true,
      type: "success",
      message:
        "Successfully custom toast window is tiggered after click the button!",
    });
  };

  return (
    <div className="body">
      <div className="button">
        <button onClick={tiggerCustomToastWindow}> Get Custom Toast </button>
      </div>

      {alert && alert.active === true && (
        <CustomAlert alert={alert} setAlert={setalert}></CustomAlert>
      )}
    </div>
  );
}

export default App;
