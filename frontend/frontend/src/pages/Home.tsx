import { Button, Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <VStack align={"center"}>
        <Heading size="5xl">QR Auth</Heading>
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
