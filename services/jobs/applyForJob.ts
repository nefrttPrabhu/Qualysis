import { prisma } from "@/lib/prisma";
import { Applicant } from "@prisma/client";

export const applyForJobs = async ({
  user_id,
  github_url,
  cover_letter,
  leetcode_url,
  linkedin_url,
  resume_url,
  portfolio_url,
  job_id,
}: Pick<
  Applicant,
  | "user_id"
  | "github_url"
  | "cover_letter"
  | "leetcode_url"
  | "linkedin_url"
  | "resume_url"
  | "portfolio_url"
  | "job_id"
>) => {
  try {
    const response = await prisma.applicant.create({
      data: {
        user_id,
        leetcode_url,
        linkedin_url,
        github_url,
        cover_letter,
        job_id,
        resume_url,
        portfolio_url,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
