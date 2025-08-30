import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Edit2 } from "iconsax-react";
import { useState, type ChangeEvent, type FC } from "react";
import { convertNumberToPersian } from "../../../utils/convertNumberToPersian";
import type { InsuranceInfo } from "../types";

interface PatientInsuranceInfoProps {
  data: InsuranceInfo;
  onChange: (data: InsuranceInfo) => void;
}

const PatientInsuranceInfo: FC<PatientInsuranceInfoProps> = ({
  data,
  onChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <Box className="shadow-xl bg-white rounded-lg py-4 mt-2">
      {isEditing ? (
        <Stack spacing={1}>
          <TextField
            label="بیمه"
            size="small"
            name="insurance"
            value={data.insurance}
            onChange={handleChange}
          />
          <TextField
            label="اعتبار بیمه"
            size="small"
            name="insuranceValidity"
            value={convertNumberToPersian(data.insuranceValidity)}
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              label="بیمه تکمیلی"
              size="small"
              name="supplementaryInsurance"
              value={data.supplementaryInsurance}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <TextField
            label="وضعیت"
            size="small"
            name="eligibility"
            value={data.eligibility}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={() => setIsEditing(false)}>
            ذخیره
          </Button>
        </Stack>
      ) : (
        <Box className="flex items-center justify-around">
          <Typography>بیمه: {data.insurance}</Typography>
          <Typography>
            اعتبار بیمه: {convertNumberToPersian(data.insuranceValidity)}
          </Typography>
          <Typography>{data.eligibility}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography>بیمه تکمیلی: {data.supplementaryInsurance}</Typography>
            <IconButton size="small" onClick={() => setIsEditing(true)}>
              <Edit2 size="16" color="#5178F5" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PatientInsuranceInfo;
