import { Box, Card } from "@mui/material";
import type { JSX } from "react";

interface Props<T> {
  items: T[];
  renderer: (item: T) => JSX.Element;
}

function CardList<T>({ items, renderer }: Props<T>) {
  return (
    <Box>
      {items.map((item, index) => (
        <Card key={index} className="my-3 mx-6 p-4 border rounded border-[#E6ECF6]">
          {renderer(item)}
        </Card>
      ))}
    </Box>
  );
}

export default CardList;
