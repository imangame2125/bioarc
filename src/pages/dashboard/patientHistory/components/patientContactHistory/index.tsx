import { Box } from "@mui/material";
import type { FC } from "react";
import type { PatientCall } from "../../../types";
import CardList from "../cardList";

interface Props {
  calls: PatientCall[];
}

const PatientContactHistory: FC<Props> = ({
  calls,
}) => {

  const renderCard = (item: PatientCall) => {
    return (
      <Box>
        {item.duration}, {item.date}
      </Box>
    )
  }

  return (
    <CardList
      items={calls}
      renderer={renderCard}
    />
  );
};

export default PatientContactHistory;
