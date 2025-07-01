export interface WaitlistFormData {
  name?: string;
  email: string;
  use_case: 'rent' | 'share' | 'both';
}

export interface WaitlistEntry extends WaitlistFormData {
  id?: string;
  created_at?: string;
}

export type UseCaseOption = {
  value: 'rent' | 'share' | 'both';
  label: string;
  description: string;
};

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
} 