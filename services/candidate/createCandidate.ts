import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const createCandidate = async ({
  id,
  leetcode_url,
  linkedin_url,
  github_url,
  portfolio_url,
  status,
  resume_url,
}: Pick<
  User,
  | "id"
  | "leetcode_url"
  | "linkedin_url"
  | "portfolio_url"
  | "resume_url"
  | "status"
  | "github_url"
>) => {
  try {
    const response = await prisma.user.update({
      where: {
        id,
      },
      data: {
        status,
        linkedin_url,
        resume_url,
        portfolio_url,
        github_url,
        leetcode_url,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
