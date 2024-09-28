"use server";

import { createJobOpening } from "@/services/company/createJobOpening";
import { jobMode, skillsRequired } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createJobOpeningAction = async (formData: FormData) => {
  // TODO : Only companies should be able to create a opening
  const skills = JSON.parse(formData.get("skills") as string);
  let parsedSkills: skillsRequired[] = [];
  skills.forEach((skill: skillsRequired) => {
    parsedSkills.push(skill);
  });
  const response = await createJobOpening({
    company_id: formData.get("company_id") as string,
    job_description: formData.get("job_description") as string,
    location: formData.get("location") as string,
    mode: formData.get("mode") as jobMode,
    skills: parsedSkills,
    registration_deadline: new Date(
      formData.get("registration_deadline") as string
    ),
    exp_required: parseInt(formData.get("exp_required") as string),
    openings: parseInt(formData.get("openings") as string),
    role: formData.get("role") as string,
  });
  console.log(response);
  redirect(`/dashboard/company/jobs/${formData.get("company_id") as string}`);
};
