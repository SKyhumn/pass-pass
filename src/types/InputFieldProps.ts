export type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  icon: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};