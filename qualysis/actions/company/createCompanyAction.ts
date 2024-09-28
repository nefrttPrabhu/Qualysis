"use server";

import { createCompany } from "@/services/company/createCompany";
import { redirect } from "next/navigation";

export const createCompanyAction = async (formData: FormData) => {
  const response = await createCompany({
    user_id: formData.get("user_id") as string,
    company_email: formData.get("company_email") as string,
    description: formData.get("description") as string,
    location: formData.get("location") as string,
    name: formData.get("name") as string,
    website_url: formData.get("website_url") as string,
  });
  if (response != undefined) {
    redirect(`/dashboard/company/jobs/${response.id}`);
  }
};
