import { Box, Button, TextField } from "@mui/material";
import { useState, type ChangeEvent, type FC } from "react";
import { convertNumberToPersian } from "../../../utils/convertNumberToPersian";
import type { BasicInformation } from "../types";
import RowForm from "./RowForm";
import FormLabel from "./FormLabel";

interface PatientBasicInfoProps {
  data: BasicInformation;
  onChange: (data: BasicInformation) => void;
}

const PatientBasicInfo: FC<PatientBasicInfoProps> = ({ data, onChange }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <Box className="shadow-xl bg-white rounded-lg">
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
        <Box className="py-2">
          <RowForm>
            <FormLabel label="نام" text={data.name} />
            <FormLabel
              label="کدملی"
              text={convertNumberToPersian(data.nationalId)}
            />
            <FormLabel
              label="موبایل"
              text={convertNumberToPersian(data.mobile)}
            />
          </RowForm>
          <RowForm>
            <FormLabel
              label="تاریخ تولد"
              text={`${convertNumberToPersian(data.birthDate)} ${convertNumberToPersian(data.age)}سال`}
            />
            <FormLabel label="جنسیت" text={data.gender} />
            <Box className="flex-1 pr-5">
              <Button size="small" onClick={() => setIsEditing(true)}>
                مشاهده بیشتر و ویرایش
              </Button>
            </Box>
          </RowForm>
        </Box>
      )}
    </Box>
  );
};

export default PatientBasicInfo;
