import { JobLeadItemProps } from "../../types/jobLeadTypes";

export const JobLeadItem: React.FC<JobLeadItemProps> = ({
  id,
  title,
  location,
  priority,
  link,
  handleDelete,
}) => {
  const inputFields: {label: string, value: string}[] = [
    {label: "Title:", value: title},
    {label: "Location:", value: location},
    {label: "Priority:", value: priority}
  ];

  return (
    <li className="company-item">
      <div className="company-details">
        {inputFields.map((input) => (
          <span key={input.label}> {input.label} {input.value} </span>
        ))}
        <span>
          <a href={link} target="_blank">
            Link: {link.substring(0, 30)}
          </a>
        </span>
      </div>
      <button type="button" onClick={() => handleDelete(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};
