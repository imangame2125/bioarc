import { Box, Button, Typography } from "@mui/material";
import { Tag } from "iconsax-react";
import { convertNumberToPersian } from "../../../../utils/convertNumberToPersian";

interface HeaderProfileProps {
  labels?: string[];
  timestamp: string;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({ labels, timestamp }) => {
  return (
    <Box className="flex justifuy-space-between items-center mt-6">
      <Box>
        <Typography color="text.secondary">پروفایل</Typography>
        <Typography color="text.secondary">
          {convertNumberToPersian(timestamp)}
        </Typography>
      </Box>

      <Box className="flex items-end gap-x-6">
        <Box>
          {labels?.map((label, index) => (
            <Typography key={index} color="primary">
              {label}
            </Typography>
          ))}
        </Box>
        <Button
          className="flex items-center gap-x-1"
          size="small"
          variant="outlined"
          startIcon={<Tag size="20" color="#2F3E63" variant="Linear" />}
          sx={{
            color: "text.primary",
            borderColor: "grey.400",
          }}
        >
          {"برچسب"}
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderProfile;
