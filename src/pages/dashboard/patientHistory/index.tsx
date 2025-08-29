import { Box, Tab, Tabs } from "@mui/material";
import { useState, type SyntheticEvent } from "react";
import AdditionalPatientInformation from "./components/additionalPatientInformation";
import PatientAppointmentHistory from "./components/patientAppointmentHistory";
import PatientContactHistory from "./components/patientContactHistory";

type RenderComponents =
  | "patientAppointmentHistory"
  | "additionalPatientInformation"
  | "patientContactHistory";
const PatientHistory = () => {
  const [renderComponent, setRenderComponent] = useState<RenderComponents>(
    "patientAppointmentHistory",
  );

  const handleChange = (event: SyntheticEvent, newValue: RenderComponents) => {
    setRenderComponent(newValue);
  };

  const renderComponents = () => {
    switch (renderComponent) {
      case "patientAppointmentHistory":
        return <PatientAppointmentHistory />;

      case "additionalPatientInformation":
        return <AdditionalPatientInformation />;

      case "patientContactHistory":
        return <PatientContactHistory />;
      default:
        return null;
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={renderComponent}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
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
