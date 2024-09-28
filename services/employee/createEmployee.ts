import { prisma } from "@/lib/prisma";
import { Employee } from "@prisma/client";

export const createEmplyee = async ({
  user_id,
  company_id,
  designation,
  github_url,
  linkedin_url,
  years_of_experience,
}: Pick<
  Employee,
  | "company_id"
  | "designation"
  | "github_url"
  | "linkedin_url"
  | "user_id"
  | "years_of_experience"
>) => {
  try {
    const response = await prisma.employee.create({
      data: {
        user_id,
        company_id,
        designation,
        github_url,
        linkedin_url,
        years_of_experience,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
