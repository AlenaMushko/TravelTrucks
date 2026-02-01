export interface DatePickerProps {
  label?: string;
  value: Date | null | [Date | null, Date | null];
  onChange: (date: Date | null | [Date | null, Date | null]) => void;
  required?: boolean;
  name?: string;
  selectsRange?: boolean;
}

export interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  className?: string;
}
