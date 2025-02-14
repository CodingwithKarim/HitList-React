import { forwardRef } from "react";
import { AddJobLeadInputProps } from "../../types/addJobLeadTypes";

export const AddJobLeadInput = forwardRef<
  HTMLInputElement,
  AddJobLeadInputProps
>(({ name, label }, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} ref={ref} type="text" required />
    </div>
  );
});
