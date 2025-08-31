import { QrCode, Button } from "@chakra-ui/react";

export default function Registration() {
  // from register page: "/#/registration/<username>/<word1>/<word2>/<word3>" (needs to be split and set to variables here)

  const path = window.location.hash.split("/");
  const username = path[2];
  const word1 = path[3];
  const word2 = path[4];
  const word3 = path[5];

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <br />

      <QrCode.Root value={word1} style={{ margin: "auto" }}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>

      <p>Code 1</p>
      <br />

      <QrCode.Root value={word2} style={{ margin: "auto" }}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>

      <p>Code 2</p>
      <br />

      <QrCode.Root value={word3} style={{ margin: "auto" }}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>

      <p>Code 3</p>
      <br />

      <p>
        Print these QR codes and keep them safe. You'll need them to log in.
      </p>

      <br />

      <Button asChild>
        <a href="/#/login">Proceed to Login</a>
      </Button>
    </div>
  );
}
