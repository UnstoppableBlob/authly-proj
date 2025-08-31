import { useState } from "react";
import {
  Button,
  VStack,
  Input,
  Heading,
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function Home() {
  const [username, setUsername] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");

  const [toScan, setToScan] = useState<null | "word1" | "word2" | "word3">(
    null
  );

  async function login() {
    if (username === "" || word1 === "" || word2 === "" || word3 === "") {
      alert("Please fill in all fields");
      return;
    }

    const response = await fetch(
      `http://127.0.0.1:5000/loginuser/${username}/${word1}/${word2}/${word3}`,
      { method: "GET" }
    );

    const text = await response.text();

    if (text === "login successful") {
      alert("User logged in!");
      localStorage.setItem("username", username);
      localStorage.setItem("word1", word1);
      localStorage.setItem("word2", word2);
      localStorage.setItem("word3", word3);
      window.location.href = "/#/app";
    } else if (text === "login failed") {
      alert("Login failed, probably incorrect codes");
    } else if (text === "user does not exist") {
      alert("User does not exist");
    } else {
      alert("Error: " + text);
    }
  }

  function scan(resultArray: any) {
    if (!resultArray || resultArray.length === 0) return;
    const value = resultArray[0].rawValue;

    if (toScan === "word1") setWord1(value);
    if (toScan === "word2") setWord2(value);
    if (toScan === "word3") setWord3(value);

    setToScan(null);
  }

  return (
    <div>
      <Heading size="4xl">Login</Heading>
      <br />
      <VStack>
        <label>Username?</label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Bob"
        />
        <br />

        <label>QR Code 1</label>
        <Input type="text" value={word1} readOnly />
        <Button onClick={() => setToScan("word1")}>Scan QR</Button>
        <br />

        <label>QR Code 2</label>
        <Input type="text" value={word2} readOnly />
        <Button onClick={() => setToScan("word2")}>Scan QR</Button>
        <br />

        <label>QR Code 3</label>
        <Input type="text" value={word3} readOnly />
        <Button onClick={() => setToScan("word3")}>Scan QR</Button>
        <br />

        <Button colorScheme="blue" onClick={login}>
          Login
        </Button>
      </VStack>

      <Dialog.Root open={!!toScan} onOpenChange={() => setToScan(null)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Scan QR Code</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Scanner
                  onScan={scan}
                  styles={{ container: { width: "100%" } }}
                />
              </Dialog.Body>
              <Dialog.Footer>
                <Button variant="outline" onClick={() => setToScan(null)}>
                  Cancel
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      <style>
        {`
          Input {
            width: 200px;
          }
        `}
      </style>
    </div>
  );
}
