import React from "react";
import Card from "./Card";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Wrapper from "./Wrapper";

type Props = {
  items: Item[];
};

interface Item {
  id: string | number;
  title: string;
  desc: string;
}

export default function CardContainer({ items }: Props) {
  return (
    <Wrapper>
      <Grid ml={10} mr={10} mt={10} templateColumns="repeat(3, 1fr)" gap={3}>
        {items.map((item) => (
          <GridItem
            key={item.id}
            p={5}
            w="100%"
            h="100%"
            border="1px solid #d4d4d4"
            borderRadius="lg"
          >
            <Card title={item.title} desc={item.desc} />
          </GridItem>
        ))}
      </Grid>
    </Wrapper>
  );
}
