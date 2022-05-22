import React from "react";
import { Heading, Box, Divider } from "@chakra-ui/react";

type Props = {
  title: string;
  desc: string;
};

export default function Card({ title, desc }: Props) {
  return (
    <Box
      maxW="sm"
      maxH="sm"
      display="flex"
      flexDirection="column"
      _last={{ marginRight: 0 }}
    >
      <Heading size="sm" mb={2}>
        {title}
      </Heading>
      <p>{desc}</p>
    </Box>
  );
}
