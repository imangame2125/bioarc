import { Box, Button, Typography } from "@mui/material";
import { Tag } from "iconsax-react";
import { convertNumberToPersian } from "../../../../utils/convertNumberToPersian";

interface HeaderProfileProps {
  tagLabel: string;
  answerLabel: string;
  profileLabel: string;
  timestamp: string;
  patientStatus: string;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({
  tagLabel,
  answerLabel,
  profileLabel,
  timestamp,
  patientStatus,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 20px",
      }}
    >
      <Box>
        <Typography color="text.secondary">{profileLabel}</Typography>
        <Typography color="text.secondary">
          {convertNumberToPersian(timestamp)}
        </Typography>
      </Box>

      <Box className="flex items-end gap-x-6">
        <Box>
          <Typography color="primary">{answerLabel}</Typography>
          <Typography className="text-center" color="primary">
            {patientStatus}
          </Typography>
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
          {tagLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderProfile;
