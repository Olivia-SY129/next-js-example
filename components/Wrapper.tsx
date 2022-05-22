import React from "react";
import { Container } from "@chakra-ui/react";

type Props = {
  children: React.ReactElement;
};

export default function Wrapper({ children }: Props) {
  return (
    <Container maxW="1140px" m="0 auto">
      {children}
    </Container>
  );
}
