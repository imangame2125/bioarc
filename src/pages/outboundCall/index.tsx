import Box from "@mui/material/Box";
import { useState } from "react";
import avatarPatient from "../../assets/images/patient.svg";
import type {
  BasicInformation,
  InsuranceInfo,
  OtherPersonFormData,
} from "./types";

const headerProfileItems = {
  timestamp: "شنبه ۴ تیرماه ساعت: ۱۲:۳۶:۲۸",
  labels: ["پرخاشگر", "به بیمار نوبت درمانگاه قرنیه داده نشود"],
};

const dashboardHeaderItems = {
  doctorName: "هدی نعمت",
  appointmentDate: "1400/05/13 11:45 - 13:00",
};

const PatientCallCardItems = {
  avatar: avatarPatient,
  callDuration: "05:32",
  callStatus: "در حال ضبط...",
  isKnownPatient: true,
  name: "مهدی غفاری",
};

const reasonsList = ["پیگیری نتیجه آزمایش", "گزارش علائم جدید", "مشاوره درمان"];
const OutboundCall = () => {
  const [basicInfoItems, setBasicInfoItems] = useState<BasicInformation>({
    name: "مهدی غفاری",
    nationalId: "5519764433",
    mobile: "09370112768",
    birthDate: "1359",
    age: 44,
    gender: "مرد",
  });

  const [insuranceInfo, setInsuranceInfo] = useState<InsuranceInfo>({
    insurance: "تأمین اجتماعی",
    insuranceValidity: "1401/01/01",
    supplementaryInsurance: "دانا",
    eligibility: "استحقاق",
  });

  const [otherPersonForm, setOtherPersonForm] = useState<OtherPersonFormData>({
    reason: "",
    note: "",
  });
  const handleBasicInfoChange = (updated: BasicInformation) => {
    setBasicInfoItems(updated);
  };

  const handleSaveOtherPerson = (data: OtherPersonFormData) => {
    setOtherPersonForm(data);
    console.log(data);
  };
  const handleInsuranceInfoChange = (updated: InsuranceInfo) => {
    setInsuranceInfo(updated);
  };

  return (
    <Box className="w-full">
      {/* <HeaderProfile
        labels={headerProfileItems.labels}
        timestamp={headerProfileItems.timestamp}
      /> */}
      {/* <DashboardHeader
        appointmentDate={dashboardHeaderItems.appointmentDate}
        doctorName={dashboardHeaderItems.doctorName}
      />
      <Grid className="px-12" container spacing={2}>
        <Grid size={4}>
          <PatientCallCard
            name={PatientCallCardItems.name}
            isKnownPatient={PatientCallCardItems.isKnownPatient}
            callStatus={PatientCallCardItems.callStatus}
            callDuration={PatientCallCardItems.callDuration}
            avatar={PatientCallCardItems.avatar}
          />
        </Grid>
        <Grid size={8}>
          <PatientBasicInfo
            data={basicInfoItems}
            onChange={handleBasicInfoChange}
          />
          <PatientInsuranceInfo
            data={insuranceInfo}
            onChange={handleInsuranceInfoChange}
          />
          <OtherPersonAppointmentForm
            reasons={reasonsList}
            defaultNote={otherPersonForm.note}
            onSave={handleSaveOtherPerson}
          />
        </Grid>
      </Grid>
      <PatientHistory /> */}
    </Box>
  );
};

export default OutboundCall;
