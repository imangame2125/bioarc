import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, type ChangeEvent, type FC } from "react";
import { convertNumberToPersian } from "../utils/convertNumberToPersian";

interface PatientBasicInfoProps {
  data: {
    name: string;
    nationalId: string;
    mobile: string;
    birthDate: string;
    age: number;
    gender: string;
  };
  onChange: (data: PatientBasicInfoProps["data"]) => void;
}

const PatientBasicInfo: FC<PatientBasicInfoProps> = ({ data, onChange }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <Box className="shadow-xl bg-white rounded-tr-lg">
      {isEditing ? (
        <Box>
          <TextField
            className="m-4"
            label="نام"
            size="small"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <TextField
            className="m-4"
            label="کد ملی"
            size="small"
            name="nationalId"
            value={data.nationalId}
            onChange={handleChange}
          />
          <TextField
            className="m-4"
            label="موبایل"
            size="small"
            name="mobile"
            value={data.mobile}
            onChange={handleChange}
          />
          <TextField
            className="m-4"
            label="تاریخ تولد"
            size="small"
            name="birthDate"
            value={data.birthDate}
            onChange={handleChange}
          />
          <TextField
            className="m-4"
            label="سن"
            size="small"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
          <TextField
            className="m-4"
            label="جنسیت"
            size="small"
            name="gender"
            value={data.gender}
            onChange={handleChange}
          />
          <Button
            className="mt-4"
            variant="contained"
            onClick={() => setIsEditing(false)}
          >
            ذخیره
          </Button>
        </Box>
      ) : (
        <Box className="py-4">
          <Box className="flex items-center justify-around">
            <Typography>نام: {data.name}</Typography>
            <Typography>
              کد ملی: {convertNumberToPersian(data.nationalId)}
            </Typography>
            <Typography>
              موبایل: {convertNumberToPersian(data.mobile)}
            </Typography>
          </Box>
          <Box className="flex items-center justify-around mt-6">
            <Typography>
              تاریخ تولد: {convertNumberToPersian(data.birthDate)} (سال
              {convertNumberToPersian(convertNumberToPersian(data.age))})
            </Typography>
            <Typography>جنسیت: {data.gender}</Typography>
            <Button size="small" onClick={() => setIsEditing(true)}>
              مشاهده بیشتر و ویرایش
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PatientBasicInfo;
