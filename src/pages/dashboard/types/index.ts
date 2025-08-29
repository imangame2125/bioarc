export interface BasicInformation {
  name: string;
  nationalId: string;
  mobile: string;
  birthDate: string;
  age: number;
  gender: string;
}

export interface InsuranceInfo {
  insurance: string;
  insuranceValidity: string;
  supplementaryInsurance: string;
  eligibility: string;
}

export interface OtherPersonAppointmentFormProps {
  reasons: string[];
  defaultNote?: string;
  onSave: (data: OtherPersonFormData) => void;
}

export interface OtherPersonFormData {
  reason: string;
  note: string;
}

export type AppointmentStatus =
  | "رزرو شده"
  | "تغییر نوبت"
  | "لغو نوبت"
  | "برگزار شده"
  | "جا به جا شده"
  | "لغو شده";
export interface PatientAppointment {
  doctorName: string;
  doctorSpecialty: string;
  status?: AppointmentStatus[];
  id: string;
  date: Date | string;
}

export interface PatientCall {
  id: string;
  date: string;
  duration: number;
}
