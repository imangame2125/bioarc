import { Box, Card } from "@mui/material";
import type { FC, JSX } from "react";

interface Props<T> {
  items: T[];
  renderer: (item: T) => JSX.Element;
}

function CardList<T>({ items, renderer }: Props<T>) {
  return (
    <Box>
      {items.map((item, index) => (
        <Card key={index} className="my-4 p-4 border rounded">
          {renderer(item)}
        </Card>
      ))}
    </Box>
  );
}

export default CardList;
