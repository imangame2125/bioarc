import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import avatarPatient from "../../assets/images/patient.svg";
import DashboardHeader from "./components/dashboardHeader";
import HeaderProfile from "./components/headerProfile";
import PatientBasicInfo from "./components/PatientBasicInfo";
import PatientInsuranceInfo from "./components/PatientInsuranceInfo";
import PatientCallCard from "./components/profileCard";
import type { BasicInformation, InsuranceInfo } from "./types";

const fakeDelay = (data: any) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

const headerProfileItems = {
  timestamp: "شنبه ۴ تیرماه ساعت: ۱۲:۳۶:۲۸",
  labels: ["پرخاشگر", "به بیمار نوبت درمانگاه قرنیه داده نشود"],
};

const response:any = {
  insurance: "2234تأمین اجتماعی",
  insuranceValidity: "1401/01/01",
  supplementaryInsurance: "دانا",
  eligibility: "3245345",
  name: "2مهدی غفاری",
  nationalId: "23434",
  mobile: "345345",
  birthDate: "345345",
  age: 44,
  gender: "مرد",
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

const Dashboard = () => {
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

  const handleBasicInfoChange = (updated: BasicInformation) => {
    setBasicInfoItems(updated);
  };

  const handleInsuranceInfoChange = (updated: InsuranceInfo) => {
    setInsuranceInfo(updated);
  };

  useEffect(() => {
    console.log("useEffect basicInfoItems");
    fakeDelay(response).then((data: typeof response) => {
      setBasicInfoItems({
        name: data.name,
        nationalId: data.nationalId,
        mobile: data.mobile,
        birthDate: data.birthDate,
        age: data.age,
        gender: data.gender,
      });

      setInsuranceInfo({
        insurance: data.insurance,
        insuranceValidity: data.insuranceValidity,
        supplementaryInsurance: data.supplementaryInsurance,
        eligibility: data.eligibility,
      });
    });
  }, []);

  console.log("Dashboard render");

  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <HeaderProfile
        labels={headerProfileItems.labels}
        timestamp={headerProfileItems.timestamp}
      />
      <DashboardHeader
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
