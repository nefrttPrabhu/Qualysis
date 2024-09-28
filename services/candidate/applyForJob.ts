import { prisma } from "@/lib/prisma";
import { Applicant } from "@prisma/client";

export const applyForJob = async ({
  job_id,
  cover_letter,
  github_url,
  leetcode_url,
  linkedin_url,
  portfolio_url,
  resume_url,
  user_id,
}: Pick<
  Applicant,
  | "job_id"
  | "cover_letter"
  | "github_url"
  | "leetcode_url"
  | "linkedin_url"
  | "portfolio_url"
  | "resume_url"
  | "user_id"
>) => {
  try {
    const response = await prisma.applicant.create({
      data: {
        job_id,
        cover_letter,
        github_url,
        leetcode_url,
        linkedin_url,
        portfolio_url,
        resume_url,
        user_id,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
