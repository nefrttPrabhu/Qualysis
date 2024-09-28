import { prisma } from "@/lib/prisma";
import { Applicant } from "@prisma/client";

export const getShortlistedCandidates = async ({
  job_id,
}: Pick<Applicant, "job_id">) => {
  try {
    const response = await prisma.applicant.findMany({
      where: {
        job_id,
        is_shortlisted: true,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
