import React from "react";
import { JobLeadItem } from "./JobLeadItem";
import { JobLeadsProps } from "../../types/jobLeadTypes";

export const JobLeads = React.memo(
  ({ jobLeads, handleDelete }: JobLeadsProps) => {
    return (
      <>
        <h2>Companies List</h2>
        {jobLeads.length > 0 ? (
          <ul className="company-list">
            {jobLeads.map((jobLead) => (
              <JobLeadItem
                key={jobLead.id}
                {...jobLead}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        ) : (
          <p>No job leads match the current filters.</p>
        )}
      </>
    );
  }
);
