import { JobLeadFilterInput } from "./JobLeadFilterInput";
import { JobLeadFilterPanelProps } from "../../types/jobLeadFilterTypes";
import React from "react";
import { FormInputKeys } from "../../types/genericTypes";

export const JobLeadFilterPanel = React.memo(
  ({ filters, onFilterChange }: JobLeadFilterPanelProps) => {
    return (
      <>
        <h2>Filter Job Leads</h2>
        <div className="filter-group flex">
          {filterFields.map((field) => (
            <JobLeadFilterInput
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={filters[field.name]}
              onChange={onFilterChange}
            />
          ))}
          <select
            className="filter-priority"
            name="priority"
            value={filters.priority}
            onChange={onFilterChange}
          >
            <option value="" disabled>
              Filter By Priority
            </option>
            <option>Low</option>
            <option>High</option>
            <option value="">All Leads</option>
          </select>
        </div>
      </>
    );
  }
);

const filterFields: { name: FormInputKeys; placeholder: string }[] = [
  { name: "title", placeholder: "Filter By Title" },
  { name: "link", placeholder: "Filter By Link" },
  { name: "location", placeholder: "Filter By Location" },
];
