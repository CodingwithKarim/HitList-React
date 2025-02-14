import { FormEvent, useRef } from "react";
import { AddJobLeadProps, FormInputRefs } from "../../types/addJobLeadTypes";
import { AddJobLeadInput } from "./AddJobLeadInput";
import { JobLeadFormValues, FormInputKeys } from "../../types/genericTypes";
import React from "react";

export const AddJobLead = React.memo(({ addNewJobLead }: AddJobLeadProps) => {
  const inputRefs = useRef<FormInputRefs>({});

  const setInputRef =
    (key: FormInputKeys) =>
    (element: HTMLInputElement | HTMLSelectElement | null) => {
      if (element) inputRefs.current[key] = element;
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newJobLead: JobLeadFormValues = {
      title: inputRefs.current?.title?.value ?? "",
      location: inputRefs.current?.location?.value ?? "",
      priority: inputRefs.current?.priority?.value ?? "",
      link: inputRefs.current?.link?.value ?? "",
    };

    addNewJobLead(newJobLead);

    Object.values(inputRefs.current).forEach(
      (inputElement) => (inputElement.value = "")
    );
  };

  return (
    <>
      <h2>Add Job Lead</h2>
      <form onSubmit={handleSubmit} className="hitlist-form">
        {inputFields.map((field) => (
          <AddJobLeadInput
            key={field.name}
            name={field.name}
            label={field.label}
            ref={setInputRef(field.name)}
          />
        ))}

        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            name="priority"
            ref={setInputRef("priority")}
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a priority...
            </option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Job Lead
        </button>
      </form>
    </>
  );
});

const inputFields: { name: FormInputKeys; label: string }[] = [
  { name: "title", label: "Job Title:" },
  { name: "link", label: "Job Link:" },
  { name: "location", label: "Location:" },
];
