import { useState } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState("");

  const [registerVisible, setRegisterVisible] = useState(false);
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [username, setUsername] = useState("");

  const [word1Login, setWord1Login] = useState("");
  const [word2Login, setWord2Login] = useState("");
  const [word3Login, setWord3Login] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");

  async function onLoginClick() {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/loginuser/" +
          usernameLogin +
          "/" +
          word1Login +
          "/" +
          word2Login +
          "/" +
          word3Login,
        { method: "GET" }
      );

      const text = await response.text();

      if (text === "login successful") {
        setTest("login successful");
      } else {
        console.log("Login failed:", text);
      }
    } catch (error) {
      console.error("error during fetch:", error);
    }
  }

  async function onRegisterClick() {
    await fetch(
      "http://127.0.0.1:5000/createuser/" +
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
      <div className="login">
        <div>
          <button type="submit" onClick={onLoginClick}>
            Login
          </button>
        </div>
        <div>
          <input
            type="text"
            id="usernameLogin"
            name="usernameLogin"
            onChange={(e) => setUsernameLogin(e.target.value)}
            placeholder="Username"
            onKeyDown={handleKeyDown}
            required
          />
          <label htmlFor="word1Login">What's your favorite color?</label>
          <input
            type="text"
            id="word1Login"
            name="word1Login"
            onChange={(e) => setWord1Login(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
          <label htmlFor="word2Login">What's your favourite food?</label>
          <input
            type="text"
            id="word2Login"
            name="word2Login"
            onChange={(e) => setWord2Login(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
          <label htmlFor="word3Login">What's your favourite hobby?</label>
          <input
            type="text"
            id="word3Login"
            name="word3Login"
            onChange={(e) => setWord3Login(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
        </div>
        <p>{test}</p>
      </div>
    </>
  );
}

export default App;
