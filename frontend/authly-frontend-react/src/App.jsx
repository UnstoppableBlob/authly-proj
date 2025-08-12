import { useState } from "react";
import "./App.css";

function App() {
  function onRegisterClick(e) {
    console.log("clicked");
  }

  return (
    <>
      <div>
        <button type="submit" onClick={onRegisterClick}>
          Register
        </button>
      </div>
    </>
  );
}

export default App;
