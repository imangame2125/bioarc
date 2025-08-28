import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import avatarPatient from "../../assets/images/patient.svg";
import DashboardHeader from "./components/dashboardHeader";
import HeaderProfile from "./components/headerProfile";
import PatientBasicInfo from "./components/PatientBasicInfo";
import PatientInsuranceInfo from "./components/PatientInsuranceInfo";
import PatientCallCard from "./components/profileCard";
const headerProfileItems = {
  tagLabel: "برچسب",
  answerLabel: "به بیمار نوبت درمانگاه قرنیه داده نشود",
  profileLabel: "پروفایل",
  timestamp: "شنبه ۴ تیرماه ساعت: ۱۲:۳۶:۲۸",
  patientStatus: "پرخاشگر",
};

const dashboardHeaderItems = {
  doctorName: "هدی نعمت",
  appointmentDate: "1400/05/13",
  appointmentTime: "11:45 - 13:00",
};

const PatientCallCardItems = {
  avatar: avatarPatient,
  callDuration: "05:32",
  callStatus: "در حال ضبط...",
  isReturning: true,
  name: "مهدی غفاری",
};

const Dashboard = () => {
  const [basicInfoItems, setBasicInfoItems] = useState({
    name: "مهدی غفاری",
    nationalId: "5519764433",
    mobile: "09370112768",
    birthDate: "1359",
    age: 44,
    gender: "مرد",
  });

  const [insuranceInfo, setInsuranceInfo] = useState({
    insurance: "تأمین اجتماعی",
    insuranceValidity: "1401/01/01",
    supplementaryInsurance: "دانا",
    eligibility: "استحقاق",
  });

  const handleBasicInfoChange = (updated: typeof basicInfoItems) => {
    setBasicInfoItems(updated);
  };
  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <HeaderProfile
        tagLabel={headerProfileItems.tagLabel}
        answerLabel={headerProfileItems.answerLabel}
        profileLabel={headerProfileItems.profileLabel}
        timestamp={headerProfileItems.timestamp}
        patientStatus={headerProfileItems.patientStatus}
      />
      <DashboardHeader
        appointmentDate={dashboardHeaderItems.appointmentTime}
        appointmentTime={dashboardHeaderItems.appointmentDate}
        doctorName={dashboardHeaderItems.doctorName}
      />

      <Grid className="px-12" container spacing={2}>
        <Grid size={4}>
          <PatientCallCard
            name={PatientCallCardItems.name}
            isReturning={PatientCallCardItems.isReturning}
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
            onChange={(updated) => setInsuranceInfo(updated)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
