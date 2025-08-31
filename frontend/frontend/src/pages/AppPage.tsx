import { Button, VStack, HStack } from "@chakra-ui/react";

export default function AppPage() {
  const username = localStorage.getItem("username");
  const word1 = localStorage.getItem("word1");
  const word2 = localStorage.getItem("word2");
  const word3 = localStorage.getItem("word3");

  async function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("word1");
    localStorage.removeItem("word2");
    localStorage.removeItem("word3");
    alert("Logged out!");
    window.location.href = "/#/";
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
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
    </div>
  );
}
