import { useState } from "react";
import "./App.css";

function App() {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [username, setUsername] = useState("");

  async function onRegisterClick(e) {
    await fetch(
      "127.0.0.1:5000/createuser/" +
        username +
        "/" +
        word1 +
        "/" +
        word2 +
        "/" +
        word3,
      { method: "GET" }
    );
  }

  function handleKeyDown(e) {
    if (e.key === " ") {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className="register">
        <div>
          <button
            type="submit"
            onClick={onRegisterClick}
            hidden={registerVisible}
          >
            Register
          </button>
        </div>
        <div>
          <input
            type="text"
            id="usernameRegister"
            name="usernameRegister"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            onKeyDown={handleKeyDown}
            required
          />
          <label htmlFor="word1Register">What's your favorite color?</label>
          <input
            type="text"
            id="word1Register"
            name="word1Register"
            onChange={(e) => setWord1(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
          <label htmlFor="word2Register">What's your favourite food?</label>
          <input
            type="text"
            id="word2Register"
            name="word2Register"
            onChange={(e) => setWord2(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
          <label htmlFor="word3Register">What's your favourite hobby?</label>
          <input
            type="text"
            id="word3Register"
            name="word3Register"
            onChange={(e) => setWord3(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
        </div>
      </div>
    </>
  );
}

export default App;
