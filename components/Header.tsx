import React from "react";
import { Flex, Heading, Button, Divider, Container } from "@chakra-ui/react";
import NextLink from "next/link";
import Wrapper from "./Wrapper";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <Wrapper>
        <Flex
          h="80px"
          ml={10}
          mr={10}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading>Home</Heading>
          <NextLink href="/signin">
            <Button>Sign in</Button>
          </NextLink>
        </Flex>
      </Wrapper>
      <Divider />
    </>
  );
}
