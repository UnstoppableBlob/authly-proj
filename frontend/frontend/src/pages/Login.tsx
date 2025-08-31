import { Button, VStack } from "@chakra-ui/react";

export default function Home() {
  // @app.route("/createuser/<username>/<word1>/<word2>/<word3>")
  async function register() {
    const username = document.getElementById(
      "usernamequery"
    ) as HTMLInputElement;
    const word1 = document.getElementById("foodquery") as HTMLInputElement;
    const word2 = document.getElementById("colorquery") as HTMLInputElement;
    const word3 = document.getElementById("hobbyquery") as HTMLInputElement;
    const response = await fetch(
      "http://127.0.0.1:5000/loginuser/" +
        username.value +
        "/" +
        word1.value +
        "/" +
        word2.value +
        "/" +
        word3.value,
      { method: "GET" }
    );

    const text = await response.text();

    if (text === "login successful") {
      alert("User logged in!");
      localStorage.setItem("username", username.value);
      localStorage.setItem("word1", word1.value);
      localStorage.setItem("word2", word2.value);
      localStorage.setItem("word3", word3.value);
      window.location.href = "/#/app";
    } else if (text === "login failed") {
      alert("Login failed, probably incorrect codes");
    } else if (text === "user does not exist") {
      alert("User does not exist");
    } else {
      alert("Error: " + text);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <VStack>
          <br />
          <label htmlFor="usernamequery">Username?</label>
          <input id="usernamequery" type="text" placeholder="Bob" />
          <br />
          <label htmlFor="foodquery">Favorite Food?</label>
          <input id="foodquery" type="text" placeholder="macandcheese" />
          <br />
          <label htmlFor="colorquery">Favorite Color?</label>
          <input id="colorquery" type="text" placeholder="blue" />
          <br />
          <label htmlFor="hobbyquery">Favorite Hobby?</label>
          <input id="hobbyquery" type="text" placeholder="sleepinginabox" />
          <br />
          <Button onClick={register}>Register</Button>
        </VStack>
      </div>
    </div>
  );
}
