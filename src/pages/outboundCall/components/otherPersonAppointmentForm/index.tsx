import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import { useState, type ChangeEvent, type FC } from "react";
import CustomInput from "../../../../components/customInput";
import type {
  OtherPersonAppointmentFormProps,
  OtherPersonFormData,
} from "../../types";

const OtherPersonAppointmentForm: FC<OtherPersonAppointmentFormProps> = ({
  reasons,
  defaultNote = "",
  onSave,
}) => {
  const [reason, setReason] = useState<string>("");
  const [note, setNote] = useState<string>(defaultNote);

  const handleSubmit = () => {
    const data: OtherPersonFormData = { reason, note };
    onSave(data);
  };
  const handleChangeReason = (e: SelectChangeEvent) => {
    setReason(e.target.value);
  };

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  return (
    <Box className="p-3 mt-4 shadow-xl bg-white">
      <Typography className="p-2">نوبت برای شخص دیگر</Typography>
      <Select
        value={reason}
        onChange={handleChangeReason}
        displayEmpty
        fullWidth
        size="small"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">حداقل یک مورد را انتخاب کنید</MenuItem>
        {reasons.map((item, idx) => (
          <MenuItem key={idx} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <CustomInput value={note} onChange={handleNoteChange} />

      <Box className="flex items-center justify-end">
        {reason === "" || note === "" ? (
          <Button
            disabled
            className="mt-4"
            variant="contained"
            onClick={handleSubmit}
          >
            ذخیره اطلاعات
          </Button>
        ) : (
          <Button className="mt-4" variant="contained" onClick={handleSubmit}>
            ذخیره اطلاعات
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default OtherPersonAppointmentForm;
