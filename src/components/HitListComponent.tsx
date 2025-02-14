import React, {
  useState,
  ChangeEvent,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { AddJobLead } from "./AddJobLead/AddJobLead";
import { JobLeadFilterPanel } from "./JobLeadFilters/JobLeadFilterPanel";
import { JobLeads } from "./JobLeads/JobLeads";
import {
  addJobLead,
  deleteJobLead,
  fetchAllJobLeads,
} from "../api/jobLeadService";
import { JobLead, JobLeadFormValues } from "../types/genericTypes";

export const HitListComponent: React.FC = () => {
  const [jobLeads, setJobLeads] = useState<JobLead[]>([]);

  const [filters, setFilters] = useState<JobLeadFormValues>({
    title: "",
    location: "",
    priority: "",
    link: "",
  });

  useEffect(() => {
    fetchAllJobLeads().then((data) => setJobLeads(data));
  }, []);

  const addNewJobLead = useCallback(async (newJobLead: JobLeadFormValues) => {
    const jobLead = await addJobLead(newJobLead);

    if (jobLead) {
      setJobLeads((prevJobLeads) => [...prevJobLeads, jobLead]);
    }
  }, []);

  const handleDeleteJobLead = useCallback(async (id: number) => {
    const success = await deleteJobLead(id);

    if (success) {
      setJobLeads((prevJobLeads) =>
        prevJobLeads.filter((jobLead) => jobLead.id !== id)
      );
    }
  }, []);

  const handleFilterJobLeads = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;

      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    },
    []
  );

  const filteredJobLeads: JobLead[] = useMemo(() => {
    const hasFilters = Object.values(filters).some(
      (filter) => filter.trim() !== ""
    );

    if (!hasFilters) {
      return jobLeads;
    }

    return jobLeads.filter((jobLead) =>
      Object.entries(filters).every(
        ([key, value]) =>
          value.trim() === "" ||
          jobLead[key as keyof JobLeadFormValues]
            .toLowerCase()
            .includes(value.toLowerCase())
      )
    );
  }, [jobLeads, filters]);

  return (
    <div className="hitlist-container">
      <AddJobLead addNewJobLead={addNewJobLead} />
      <JobLeadFilterPanel
        filters={filters}
        onFilterChange={handleFilterJobLeads}
      />
      <JobLeads
        jobLeads={filteredJobLeads}
        handleDelete={handleDeleteJobLead}
      />
    </div>
  );
};
