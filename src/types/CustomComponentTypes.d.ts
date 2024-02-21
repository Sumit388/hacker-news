type CustomAutoCompletePropsType = {
  defaultValue: object;
  options: object[];
  renederInputValue: (entry: any) => string;
  filterOption: (option: any, searchString: string) => boolean;
  renderOption: (entry: any) => React.ReactNode;
  onChange: (entry: any) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  id?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  label?: string;
  inputLabelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  error?: boolean;
  helperText?: React.ReactNode;
};
