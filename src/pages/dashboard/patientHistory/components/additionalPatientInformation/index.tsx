import { Box, Button, Card, Typography } from "@mui/material";
import type { FC } from "react";
import type { PatientHistoryCardProps } from "../../../types";

const AdditionalPatientInformation: FC<PatientHistoryCardProps> = ({
  cardPatientItems,
}) => {
  return (
    <Box>
      {cardPatientItems.map((item) => {
        return (
          <Card className="my-4" key={item.id}>
            <Box className="flex items-center px-4 justify-between">
              <Typography>{item.name}</Typography>
              <Box className="flex items-center justify-center">
                {item.status?.map((sts) => {
                  return <Button key={sts}>{sts}</Button>;
                })}
              </Box>
            </Box>
            <Box className="flex items-center justify-between px-4">
              <Typography>{item.specialty}</Typography>
              <Typography>{item.date.toLocaleString()}</Typography>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default AdditionalPatientInformation;
