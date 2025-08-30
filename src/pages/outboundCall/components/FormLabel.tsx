import { Typography } from "@mui/material";
import type React from "react";

interface Props {
  label: string;
  text: string;
}

const FormLabel: React.FC<Props> = ({ label, text }) => {
  return (
    <Typography className="flex-1 pr-5">
      {label}: {text}
    </Typography>
  );
};

export default FormLabel;
