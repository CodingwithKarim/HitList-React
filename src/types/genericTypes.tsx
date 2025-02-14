export interface JobLead {
  id: number;
  title: string;
  location: string;
  priority: string;
  link: string;
}

export type JobLeadFormValues = Omit<JobLead, "id">;

export type FormInputKeys = "title" | "location" | "priority" | "link";
