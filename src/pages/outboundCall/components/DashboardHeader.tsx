import { Box, Button, Typography } from "@mui/material";
import { Add, Edit2 } from "iconsax-react";
import { convertNumberToPersian } from "../../../utils/convertNumberToPersian";

interface DashboardHeaderProps {
  doctorName: string;
  appointmentDate: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  doctorName,
  appointmentDate,
}) => {
  return (
    <Box className="flex-col justify-between items-center py-3 lg:px-12 border-t lg:gap-x-7 lg:flex lg:flex-row">
      <Box className="flex-col items-center text-nowrap text-sm bg-[#F4F6FB] rounded py-2 w-full px-2 py-5 lg:flex lg:flex-row">
        <Typography className="mt-2 lg:mt-0">اطلاعات نوبت:</Typography>
        <Box className="w-full flex-col justify-evenly mt-2 lg:mt-0 lg:flex lg:flex-row">
          <Typography>نام پرشک:{doctorName}</Typography>
          <Box className="flex items-center mt-2 lg:mt-0">
            <Typography>
              تاریخ نوبت: {convertNumberToPersian(appointmentDate)}
            </Typography>
          </Box>

          <Typography className="flex items-center gap-x-2 mt-2 lg:mt-0">
            <Edit2 size="20" color="#36459B" />
            ویرایش نوبت
          </Typography>
        </Box>
      </Box>
      <Button
        className="flex items-center gap-x-2 w-full lg:w-[205px] rounded-[7px] mt-4 lg:mt-0"
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
