import { Box, Button, Typography } from "@mui/material";
import type { FC } from "react";
import type { PatientAppointment } from "../../../types";
import CardList from "../cardList";

interface Props {
  appointments: PatientAppointment[];
}

const PatientAppointmentHistory: FC<Props> = ({ appointments }) => {
  const renderCard = (appointment: PatientAppointment) => {
    return (
      <>
        <Box className="flex items-center px-4 justify-between">
          <Typography>{appointment.doctorName}</Typography>
          <Box className="flex items-center justify-center">
            {appointment.status?.map((sts, index) => {
              return (
                <Button
                  className={`${sts === "رزرو شده" ? "bg-red-800" : ""}`}
                  key={index}
                >
                  {sts}
                </Button>
              );
            })}
          </Box>
        </Box>
        <Box className="flex items-center justify-between px-4">
          <Typography>{appointment.doctorSpecialty}</Typography>
          <Typography>{appointment.date.toLocaleString()}</Typography>
        </Box>
      </>
    );
  };

  return <CardList items={appointments} renderer={renderCard} />;
};

export default PatientAppointmentHistory;
