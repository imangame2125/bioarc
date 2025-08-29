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
