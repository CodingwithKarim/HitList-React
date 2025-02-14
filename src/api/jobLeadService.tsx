import axios from "axios";
import { JobLead, JobLeadFormValues } from "../types/genericTypes";

const API_URL = "http://localhost:5000/companies";

export async function fetchAllJobLeads(): Promise<JobLead[]> {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching companies...", error);
    return [];
  }
}

export async function addJobLead(
  newCompany: JobLeadFormValues
): Promise<JobLead | null> {
  try {
    const response = await axios.post(API_URL, newCompany);
    return response.data;
  } catch (error) {
    console.log("Error adding a new company...", error);
    return null;
  }
}

export async function deleteJobLead(id: number): Promise<boolean> {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.log("Error deleting a company...", error);
    return false;
  }
}
