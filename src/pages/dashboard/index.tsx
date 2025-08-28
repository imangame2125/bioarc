import Box from "@mui/material/Box";
import avatarPatient from "../../assets/images/patient.svg";
import DashboardHeader from "./dashboardHeader";
import HeaderProfile from "./headerProfile";
import PatientCallCard from "./profileCard";
const headerProfileItems = {
  tagLabel: "برچسب",
  answerLabel: "به بیمار نوبت درمانگاه قرنیه داده نشود",
  profileLabel: "پروفایل",
  timestamp: "۱۴۰۲/۳/۲۲، ساعت ۲۲:۴۷",
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

      <PatientCallCard
        name={PatientCallCardItems.name}
        isReturning={PatientCallCardItems.isReturning}
        callStatus={PatientCallCardItems.callStatus}
        callDuration={PatientCallCardItems.callDuration}
        avatar={PatientCallCardItems.avatar}
      />
    </Box>
  );
};

export default Dashboard;
