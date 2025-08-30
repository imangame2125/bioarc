import type { PatientInfo } from "../types";

export const getPatientData = () => {
  return new Promise<PatientInfo>((resolve) => {
    setTimeout(() => {
      resolve({
        basicInformation: {
          name: "مهدی غفاری",
          nationalId: "5519764433",
          mobile: "09370112768",
          birthDate: "1359",
          age: 44,
          gender: "مرد",
        },
        insuranceInformation: {
          insurance: "تأمین اجتماعی",
          insuranceValidity: "1401/01/01",
          supplementaryInsurance: "دانا",
          eligibility: "استحقاق",
        },
        appointmentsHistory: [
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
            status: ["لغو شده"],
          },
        ],
        appointmentInformation: {
          doctorName: "هدی نعمت",
          date: "1400/05/13 11:45 - 13:00",
        },
        tags: ["پرخاشگر", "به بیمار نوبت درمانگاه قرنیه داده نشود"]
      });
    }, 500);
  });
};
