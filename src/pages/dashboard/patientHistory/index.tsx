import { Box, Tab, Tabs } from "@mui/material";
import { useState, type SyntheticEvent } from "react";
import type { DoctersProps } from "../types";
import AdditionalPatientInformation from "./components/additionalPatientInformation";
import PatientAppointmentHistory from "./components/patientAppointmentHistory";
import PatientContactHistory from "./components/patientContactHistory";

const patientAppointmentHistory: DoctersProps[] = [
  {
    name: "دکتر هاشمی",
    specialty: "متخصص ریه",
    id: "1",
    date: "دو سال پیش",
    status: ["لغو نوبت", "لغو نوبت", "رزرو شده"],
  },
  {
    name: "دکتر هاشمی",
    specialty: "متخصص ریه",
    id: "2",
    date: "۱۴۰۲/۰۸/۱۶",
    status: ["لغو نوبت"],
  },
];

const additionalPatientInformation: DoctersProps[] = [
  {
    name: "دکتر هاشمی",
    specialty: "متخصص ریه",
    id: "1",
    date: "سه ماه پیش",
    status: ["لغو شده"],
  },
  {
    name: "دکتر رسولی",
    specialty: "متخصص گوش و حلق و بینی",
    id: "2",
    date: "۱۴۰۲/۰۸/۱۶",
    status: ["لغو شده"],
  },
  {
    name: "دکتر عیوبی",
    specialty: "متخصص گوش و حلق و بینی",
    id: "3",
    date: "۱۴۰۲/۰۸/۱۶",
    status: ["لغو شده"],
  },
  {
    name: "دکتر عیوبی",
    specialty: "متخصص گوش و حلق و بینی",
    id: "4",
    date: "۱۴۰۲/۰۸/۱۶",
    status: [
      "رزرو شده",
      "تغییر نوبت",
      "لغو نوبت",
      "جا به جا شده",
      "برگزار شده",
    ],
  },
  {
    name: "دکتر عیوبی",
    specialty: "متخصص گوش و حلق و بینی",
    id: "5",
    date: "۱۴۰۲/۰۸/۱۶",
    status: ["رزرو شده", "تغییر نوبت", "لغو نوبت"],
  },
  {
    name: "دکتر عیوبی",
    specialty: "متخصص گوش و حلق و بینی",
    id: "6",
    date: "۱۴۰۲/۰۸/۱۶",
    status: ["رزرو شده", "تغییر نوبت", "لغو نوبت"],
  },
];

const patientContactHistory: DoctersProps[] = [
  {
    name: "دکتر هاشمی",
    specialty: "متخصص ریه",
    id: "1",
    date: "۱۴۰۲/۰۸/۱۶",
    status: ["لغو نوبت"],
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
            cardPatientItems={patientAppointmentHistory}
          />
        );

      case "additionalPatientInformation":
        return (
          <AdditionalPatientInformation
            cardPatientItems={additionalPatientInformation}
          />
        );

      case "patientContactHistory":
        return (
          <PatientContactHistory cardPatientItems={patientContactHistory} />
        );
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
