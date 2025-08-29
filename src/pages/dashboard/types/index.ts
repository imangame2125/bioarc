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

export type DoctorStatus =
  | "رزرو شده"
  | "تغییر نوبت"
  | "لغو نوبت"
  | "برگزار شده"
  | "جا به جا شده"
  | "لغو شده";
export interface DoctersProps {
  name: string;
  specialty: string;
  status?: DoctorStatus[];
  id: string;
  date: Date | string;
}
export interface PatientHistoryCardProps {
  cardPatientItems: DoctersProps[];
}
