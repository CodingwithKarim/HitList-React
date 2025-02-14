import { JobLeadFormValues, FormInputKeys } from "./genericTypes";

export interface AddJobLeadProps {
    addNewJobLead: (newJobLead: JobLeadFormValues) => void;
}

export interface AddJobLeadInputProps {
    label: string,
    name: FormInputKeys,
}

export type FormInputRefs = Partial<Record<FormInputKeys, HTMLInputElement | HTMLSelectElement>>