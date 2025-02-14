import { ChangeEvent } from "react";
import { FormInputKeys, JobLeadFormValues } from "./genericTypes";

export interface JobLeadFilterPanelProps {
    filters: JobLeadFormValues;
    onFilterChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export interface JobLeadFilterInputProps {
    name: FormInputKeys;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }