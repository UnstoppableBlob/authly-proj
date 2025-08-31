import { Button, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <VStack>
        <h1>QR Auth</h1>
        <br />
        <Button asChild>
          <a href="/#/register">Register</a>
        </Button>
        <br />
        <Button asChild>
          <a href="/#/login">Login</a>
        </Button>
      </VStack>
    </div>
  );
}
