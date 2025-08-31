import { QrCode, Button, Heading } from "@chakra-ui/react";

export default function Registration() {
  const path = window.location.hash.split("/");
  const username = path[2];
  const word1 = path[3];
  const word2 = path[4];
  const word3 = path[5];

  return (
    <div>
      <Heading size="4xl">Welcome, {username}</Heading>
      <br />
      <br />

      <QrCode.Root value={word1} style={{ margin: "auto" }}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>

      <p>Code 1</p>
      <br />
      <br />

      <QrCode.Root value={word2} style={{ margin: "auto" }}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>

      <p>Code 2</p>
      <br />
      <br />

      <QrCode.Root value={word3} style={{ margin: "auto" }}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>

      <p>Code 3</p>
      <br />
      <br />

      <p>
        Print these QR codes and keep them safe. You'll need to scan them to log
        in. (Or just take a photo.)
      </p>

      <br />

      <Button asChild>
        <a href="/#/login">Proceed to Login</a>
      </Button>
    </div>
  );
}
