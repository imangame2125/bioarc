import { Box, Button, Typography } from "@mui/material";
import { Add, Edit2 } from "iconsax-react";
import { convertNumberToPersian } from "../../../../utils/convertNumberToPersian";

interface DashboardHeaderProps {
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  doctorName,
  appointmentDate,
  appointmentTime,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 48px",
        borderBottom: "1px solid #e0e0e0",
        bgcolor: "background.paper",
        borderTop: "1px solid silver",
        margin: "20px 0px",
      }}
    >
      <Box className="flex items-center text-nowrap text-sm bg-[#F4F6FB] rounded py-2 justify-between w-11/12 px-2">
        <Typography>اطلاعات نوبت:{doctorName}</Typography>
        <Box className="flex items-center">
          <Typography>
            تاریخ نوبت: {convertNumberToPersian(appointmentDate)}-
          </Typography>

          <Typography component={"span"}>
            {convertNumberToPersian(appointmentTime)}
          </Typography>
        </Box>

        <Typography className="flex items-center gap-x-2">
          <Edit2 size="20" color="#36459B" />
          ویرایش نوبت
        </Typography>
      </Box>
      <Button
        className="flex items-center gap-x-2 w-[205px] rounded-[7px]"
        size="large"
        variant="contained"
        color="primary"
      >
        <Add size="14" color="#FFFFFF" />
        ثبت جدید
      </Button>
    </Box>
  );
};

export default DashboardHeader;
