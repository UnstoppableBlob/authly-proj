import { useState } from "react";
import "./App.css";
import { QrCode } from "@chakra-ui/react";

function App() {
  return (
    <>
      <QrCode.Root value="jghjgjhjhghjjgjhhjghjghjghguihu">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    </>
  );
}

export default App;
