import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface Props {
  selectedDoctor: string;
  selectedClinic: string;
  selectedDepartment: string;
}

const ClinicSettings = ({
  selectedDoctor,
  selectedClinic,
  selectedDepartment,
}: Props) => {
  return (
    <>
      <Select value={selectedDoctor} onChange={() => {}} size="small">
        <MenuItem value={selectedDoctor}>{selectedDoctor}</MenuItem>
      </Select>
      <Select value={selectedClinic} onChange={() => {}} size="small">
        <MenuItem value={selectedClinic}>{selectedClinic}</MenuItem>
      </Select>
      <Select value={selectedDepartment} onChange={() => {}} size="small">
        <MenuItem value={selectedDepartment}>{selectedDepartment}</MenuItem>
      </Select>
    </>
  );
};

export default ClinicSettings;
