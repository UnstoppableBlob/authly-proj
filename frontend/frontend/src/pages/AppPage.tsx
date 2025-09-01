import { backendURL } from "@/config";
import { Button, HStack, For, Spinner, Heading } from "@chakra-ui/react";
import { Card, QrCode, SimpleGrid, Box, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function AppPage() {
  const username = localStorage.getItem("username");
  const word1 = localStorage.getItem("word1");
  const word2 = localStorage.getItem("word2");
  const word3 = localStorage.getItem("word3");
  const [code, setCode] = useState("");

  if (!username || !word1 || !word2 || !word3) {
    alert("You are not logged in!");
    window.location.href = "/authly-proj/#/login";
  }

  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function getHistory() {
    // @app.route("/gethistory/<username>/<word1>/<word2>/<word3>")
    const response = await fetch(
      `${backendURL}/gethistory/` +
        username +
        "/" +
        word1 +
        "/" +
        word2 +
        "/" +
        word3,
      {
        method: "GET",
      }
    );

    const text = await response.text();

    if (text === "user does not exist") {
      alert("User does not exist!");
      window.location.href = "/authly-proj/#/app";
    } else if (text === "incorrect credentials") {
      alert("Incorrect credentials!");
      window.location.href = "/authly-proj/#/app";
    } else {
      const history = JSON.parse(text);
      setHistory(history);
      setLoading(false);
      return history;
    }
  }

  useEffect(() => {
    getHistory();
  }, []);

  async function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("word1");
    localStorage.removeItem("word2");
    localStorage.removeItem("word3");
    alert("Logged out!");
    window.location.href = "/authly-proj/#/";
  }

  async function onChange(e: any) {
    setCode(e.target.value);
  }

  async function onSaveClick() {
    if (code === "") {
      alert("Please enter a code!");
      return;
    }

    const response = await fetch(
      `${backendURL}/addhistory/` +
        username +
        "/" +
        word1 +
        "/" +
        word2 +
        "/" +
        word3 +
        "/" +
        code,
      {
        method: "GET",
      }
    );

    const text = await response.text();

    if (text === "user does not exist") {
      alert("User does not exist!");
      window.location.href = "/authly-proj/#/app";
    } else if (text === "incorrect credentials") {
      alert("Incorrect credentials!");
      window.location.href = "/authly-proj/#/app";
    } else if (text === "added succesfully") {
      alert("History added successfully!");
      setHistory([...history, code]);
    } else {
      alert("Error: " + text);
    }
  }

  return (
    <div>
      <Heading size="4xl">QR Code Generator</Heading>
      <br />
      <HStack
        style={{ margin: "auto", width: "100%", justifyContent: "center" }}
      >
        <p style={{ marginRight: "20px" }}>Logged in as: {username}</p>
        <Button onClick={logout}>Logout</Button>
      </HStack>
      <br />
      <br />
      <br />

      <Card.Root>
        <Card.Body>
          <br />
          <Input
            type="text"
            placeholder="Enter text"
            onChange={onChange}
            style={{ margin: "auto", textAlign: "center" }}
          />
          <br />
          <QrCode.Root value={code} style={{ margin: "auto" }}>
            <QrCode.Frame>
              <QrCode.Pattern />
            </QrCode.Frame>
          </QrCode.Root>
          <br />
          <Button
            onClick={onSaveClick}
            style={{ margin: "auto", width: "100px" }}
          >
            Save
          </Button>
          <br />
        </Card.Body>
      </Card.Root>

      <br />
      <hr />
      <br />
      <h2 style={{ fontSize: "30px", fontWeight: "400" }}>Saved History</h2>
      <br />

      <SimpleGrid minChildWidth="100px" gap="20px">
        <For
          each={history.slice().reverse()}
          fallback={
            <div>{loading ? <Spinner /> : <p>No history found</p>}</div>
          }
        >
          {(item) => (
            <div>
              <Box />
              <QrCode.Root value={item} style={{ margin: "auto" }}>
                <QrCode.Frame>
                  <QrCode.Pattern />
                </QrCode.Frame>
              </QrCode.Root>
              <p>{item}</p>
              <Box />
            </div>
          )}
        </For>
      </SimpleGrid>
      <style>
        {`
          Input {
            width: 300px;
          }
        `}
      </style>
    </div>
  );
}
