import { JobLead } from "./genericTypes";

export interface JobLeadItemProps extends JobLead {
    handleDelete: (id: number) => void;
  }
  
  export interface JobLeadsProps {
    jobLeads: JobLead[];
    handleDelete: (id: number) => void;
  }