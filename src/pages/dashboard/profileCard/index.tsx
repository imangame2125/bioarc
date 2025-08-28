import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { Call, CallRemove, MicrophoneSlash, Pause } from "iconsax-react";
import type { FC } from "react";
interface PatientCallCardProps {
  name: string;
  avatar: string;
  isReturning: boolean;
  callDuration: string;
  callStatus: string;
}

const PatientCallCard: FC<PatientCallCardProps> = ({
  name,
  avatar,
  isReturning,
  callDuration,
  callStatus,
}) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: 2,
        textAlign: "center",
        maxWidth: 300,
        margin: "auto",
      }}
    >
      {isReturning && (
        <Typography
          className="bg-[#F4F6FB] h-[70px] rounded-t-[12px]"
          sx={{ textAlign: "right" }}
        >
          بیمار قدیمی
        </Typography>
      )}

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

      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
        <Button
          className="flex items-center gap-x-2"
          variant="outlined"
          size="small"
          startIcon={<MicrophoneSlash size="13" color="#B2C6E3" />}
        >
          بی‌صدا
        </Button>
        <Button
          className="flex items-center gap-x-2"
          variant="outlined"
          size="small"
          startIcon={<Call size="13" color="#B2C6E3" />}
        >
          انتقال
        </Button>
        <Button
          className="flex items-center gap-x-2"
          variant="outlined"
          size="small"
          startIcon={<Pause size="13" color="#B2C6E3" />}
        >
          نگه داشتن
        </Button>
      </Stack>

      <Button
        className="flex items-center gap-x-2 w-[252px] "
        variant="contained"
        color="error"
        fullWidth
        startIcon={<CallRemove size="20" color="#FF8A65" />}
        sx={{ mt: 2 }}
      >
        قطع تماس
      </Button>
    </Box>
  );
};

export default PatientCallCard;
