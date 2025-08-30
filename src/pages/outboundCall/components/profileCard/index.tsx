import { Avatar, Box, Button, Typography } from "@mui/material";
import { Call, CallRemove, MicrophoneSlash, Pause } from "iconsax-react";
import type { FC, JSX } from "react";
import React from "react";
interface PatientCallCardProps {
  name: string;
  avatar: string;
  isKnownPatient: boolean;
  callDuration: string;
  callStatus: string;
}

interface RecorderButtonProps {
  text: string;
  icon: React.FC;
}

const RecorderButton: FC<RecorderButtonProps> = ({ text, icon }) => {
  return (
    <Button
      className="flex-col w-[84px] h-[66px] text-sm justify-evenly"
      variant="outlined"
      size="small"
      startIcon={React.createElement(icon, {
        size: "13",
        color: "#B2C6E3",
      } as any)}
    >
      {text}
    </Button>
  );
};

const PatientCallCard: FC<PatientCallCardProps> = ({
  name,
  avatar,
  isKnownPatient,
  callDuration,
  callStatus,
}) => {
  return (
    <Box className="text-center m-w-[400px]">
      {isKnownPatient && (
        <Typography
          className="bg-[#F4F6FB] h-[70px] rounded-t-[12px] py-6 px-5"
          sx={{ textAlign: "right" }}
        >
          بیمار قدیمی
        </Typography>
      )}
      <Box className='bg-white pb-12 rounded-b-[12px]'>
        <Avatar
          className="-translate-y-10"
          src={avatar}
          sx={{ width: 80, height: 80, margin: "auto", zIndex: "1" }}
        />
        <Typography variant="h6">{name}</Typography>

        <Typography variant="h5" sx={{ mt: 1 }}>
          {callDuration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {callStatus}
        </Typography>

        <Box className="flex items-center gap-x-2 my-4 justify-center">
          <RecorderButton text="بی‌صدا" icon={MicrophoneSlash} />
          <RecorderButton text="انتقال" icon={Call} />
          <RecorderButton text="نگه داشتن" icon={Pause} />
        </Box>

        <Button
          className="flex items-center gap-x-2 w-[252px] justify-center mx-auto my-4"
          variant="contained"
          color="error"
          fullWidth
          startIcon={<CallRemove size="20" color="#FF8A65" />}
          sx={{ mt: 2 }}
        >
          قطع تماس
        </Button>
      </Box>
    </Box>
  );
};

export default PatientCallCard;
