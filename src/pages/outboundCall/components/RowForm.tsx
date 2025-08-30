import { Box } from "@mui/material";
import type { FC } from "react";

const RowForm: FC<React.PropsWithChildren> = ({ children }) => {
  return <Box className="flex items-center justify-around bg my-2">{children}</Box>;
};

export default RowForm;