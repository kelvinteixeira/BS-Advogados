export type FormValues = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export type FormActions = {
  setSubmitting: (props: boolean) => void;
  resetForm: () => void;
};