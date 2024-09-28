"use server";

import { createEmplyee } from "@/services/employee/createEmployee";
import { redirect } from "next/navigation";

export const createEmployeeAction = async (formData: FormData) => {
  const response = await createEmplyee({
    user_id: formData.get("user_id") as string,
    company_id: formData.get("company_id") as string,
    designation: formData.get("designation") as string,
    github_url: formData.get("github_url") as string,
    linkedin_url: formData.get("linkedin_url") as string,
    years_of_experience: parseInt(
      formData.get("years_of_experience") as string
    ),
  });

  redirect("/dashboard");
};
