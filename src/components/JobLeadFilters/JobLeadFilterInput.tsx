import { JobLeadFilterInputProps } from "../../types/jobLeadFilterTypes";

export const JobLeadFilterInput: React.FC<JobLeadFilterInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
