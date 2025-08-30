import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import avatarPatient from "../../assets/images/patient.svg";
import type {
  AppintmentInformation,
  BasicInformation,
  InsuranceInfo,
  OtherPersonFormData,
  PatientAppointment,
} from "./types";
import HeaderProfile from "./components/HeaderProfile";
import PatientCallCard from "./components/PatientCallCard";
import PatientBasicInfo from "./components/PatientBasicInfo";
import PatientInsuranceInfo from "./components/PatientInsuranceInfo";
import DashboardHeader from "./components/DashboardHeader";
import OtherPersonAppointmentForm from "./components/OtherPersonAppointmentForm";
import PatientHistory from "./components/PatientHistory";
import { getPatientData } from "./service/outboundCall";


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
    name: "",
    nationalId: "",
    mobile: "",
    birthDate: "",
    age: 0,
    gender: "",
  });

  const [insuranceInfo, setInsuranceInfo] = useState<InsuranceInfo>({
    insurance: "",
    insuranceValidity: "",
    supplementaryInsurance: "",
    eligibility: "",
  });

  const [appointmentInfo, setAppointmentInfo] = useState<AppintmentInformation>({
    doctorName: '',
    date: ''
  })

  const [appointmentsHistory, setAppointmentsHistory] = useState<PatientAppointment[]>([]);
  const [tags, setTags] = useState<string[]>([]);

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

  useEffect(() => {
    getPatientData()
    .then(data => {
      setBasicInfoItems(data.basicInformation);
      setInsuranceInfo(data.insuranceInformation);
      setAppointmentsHistory(data.appointmentsHistory);
      setAppointmentInfo(data.appointmentInformation);
      setTags(data.tags);
    })
  }, [])

  return (
    <Box className="w-full px-2 lg:px-0 bg-[#CFDDF080]">
      <HeaderProfile
        labels={tags}
        timestamp={"شنبه ۴ تیرماه ساعت: ۱۲:۳۶:۲۸"}
      />
      <DashboardHeader
        appointmentDate={appointmentInfo.date}
        doctorName={appointmentInfo.doctorName}
      />
      <Box className="flex-col gap-x-5 w-full lg:flex lg:flex-row lg:px-12">
        <Box className='flex-4'>
          <PatientCallCard
            name={PatientCallCardItems.name}
            isKnownPatient={PatientCallCardItems.isKnownPatient}
            callStatus={PatientCallCardItems.callStatus}
            callDuration={PatientCallCardItems.callDuration}
            avatar={PatientCallCardItems.avatar}
          />
        </Box>
        <Box className='flex-8 mt-2 lg:mt-0'>
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
        </Box>
      </Box>
      <PatientHistory appointmentsHitory={appointmentsHistory} />
    </Box>
  );
};

export default OutboundCall;
