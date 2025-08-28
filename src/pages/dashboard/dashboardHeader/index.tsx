import { Box, Button, Typography } from "@mui/material";
import { Add, Edit2 } from "iconsax-react";

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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        borderBottom: "1px solid #e0e0e0",
        bgcolor: "background.paper",
        borderTop: "1px solid silver",
        margin: "20px 0px",
      }}
    >
      <Box className="flex items-center bg-[#F4F6FB] rounded py-2">
        <Typography className="mx-8" variant="body2" color="text.secondary">
          نام پزشک: {doctorName}
        </Typography>
        <Typography className="mx-8" variant="body2" color="text.secondary">
          تاریخ نوبت: {appointmentDate}
        </Typography>
        <Typography className="mx-8" variant="body2" color="text.secondary">
          ساعت نوبت: {appointmentTime}
        </Typography>

        <Typography className="mx-8 flex items-center gap-x-2" color="primary">
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
