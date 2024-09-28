import { prisma } from "@/lib/prisma";
import { Jobs } from "@prisma/client";

export const createJobOpening = async ({
  company_id,
  job_description,
  location,
  mode,
  openings,
  role,
  skills,
  registration_deadline,
  exp_required,
}: Pick<
  Jobs,
  | "company_id"
  | "job_description"
  | "location"
  | "mode"
  | "openings"
  | "role"
  | "skills"
  | "registration_deadline"
  | "exp_required"
>) => {
  try {
    const response = await prisma.jobs.create({
      data: {
        company_id,
        job_description,
        location,
        mode,
        openings,
        role,
        skills,
        registration_deadline,
        exp_required,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
