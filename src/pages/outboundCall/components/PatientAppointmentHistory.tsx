import { Box, Button, Typography } from "@mui/material";
import type { FC } from "react";
import type { AppointmentStatus, PatientAppointment } from "../types";
import CardList from "./CardList";

interface Props {
  appointments: PatientAppointment[];
}

const objectMap: Record<AppointmentStatus, string> = {
  'لغو شده': '#E1797D',
  'جا به جا شده': '#F3A691',
  'برگزار شده': '#8BC5A2',
  'رزرو شده': '#95C5E1',
  'لغو نوبت': '',
  'تغییر نوبت': ''
}

const PatientAppointmentHistory: FC<Props> = ({ appointments }) => {
  const renderCard = (appointment: PatientAppointment) => {
    return (
      <>
        <Box className="flex items-center px-4 justify-between">
          <Typography>{appointment.doctorName}</Typography>
          <Box className="flex items-center justify-center">
            {appointment.status?.map((sts, index) => {
              let bgColor = objectMap[sts];
              bgColor = `bg-[${bgColor}]`;
              return (
                <Button
                  className={bgColor}
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
