import { Box, Tab, Tabs } from "@mui/material";
import { useState, type FC, type SyntheticEvent } from "react";
import type { PatientAppointment, PatientCall } from "../types";
import AdditionalPatientInformation from "./AdditionalPatientInformation";
import PatientAppointmentHistory from "./PatientAppointmentHistory";
import PatientContactHistory from "./PatientContactHistory";

const patientContactHistory: PatientCall[] = [
  {
    duration: 120,
    date: "1402/08/16 - 14:30",
    id: "1",
  },
];
type RenderComponents =
  | "patientAppointmentHistory"
  | "additionalPatientInformation"
  | "patientContactHistory";

interface Props {
  appointmentsHitory: PatientAppointment[];
}

const PatientHistory: FC<Props> = ({ appointmentsHitory }) => {
  const [renderComponent, setRenderComponent] = useState<RenderComponents>(
    "patientAppointmentHistory",
  );

  const handleChange = (event: SyntheticEvent, newValue: RenderComponents) => {
    setRenderComponent(newValue);
  };

  const renderComponents = () => {
    switch (renderComponent) {
      case "patientAppointmentHistory":
        return <PatientAppointmentHistory appointments={appointmentsHitory} />;

      case "additionalPatientInformation":
        return <AdditionalPatientInformation />;

      case "patientContactHistory":
        return <PatientContactHistory calls={patientContactHistory} />;
      default:
        return null;
    }
  };

  return (
    <Box className="bg-white mt-2 lg:mx-12 rounded-lg py-4">
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={renderComponent}
        onChange={handleChange}
        className="mx-4"
      >
        <Tab value="patientAppointmentHistory" label="تاریخچه نوبت‌های بیمار" />
        <Tab value="patientContactHistory" label="تاریخچه تماس‌های بیمار" />
        <Tab
          value="additionalPatientInformation"
          label="اطلاعات تکمیلی بیمار"
        />
      </Tabs>
      {renderComponents()}
    </Box>
  );
};

export default PatientHistory;
