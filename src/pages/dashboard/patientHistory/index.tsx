import { Box, Tab, Tabs } from "@mui/material";
import { useState, type SyntheticEvent } from "react";
import type { PatientAppointment, PatientCall } from "../types";
import AdditionalPatientInformation from "./components/additionalPatientInformation";
import PatientAppointmentHistory from "./components/patientAppointmentHistory";
import PatientContactHistory from "./components/patientContactHistory";

const patientAppointmentHistory: PatientAppointment[] = [
  {
    doctorName: "دکتر هاشمی",
    doctorSpecialty: "متخصص ریه",
    id: "1",
    date: "دو سال پیش",
    status: ["لغو نوبت", "لغو نوبت", "رزرو شده"],
  },
  {
    doctorName: "دکتر هاشمی",
    doctorSpecialty: "متخصص ریه",
    id: "2",
    date: "۱۴۰۲/۰۸/۱۶",
    status: ["لغو نوبت"],
  },
];


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
        return (
          <PatientAppointmentHistory
            appointments={patientAppointmentHistory}
          />
        );

      case "additionalPatientInformation":
        return (
          <AdditionalPatientInformation />
        );

      case "patientContactHistory":
        return (
          <PatientContactHistory calls={patientContactHistory} />
        );
      default:
        return null;
    }
  };
  
  return (
    <Box className="w-full">
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
