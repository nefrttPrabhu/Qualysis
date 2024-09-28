import { prisma } from "@/lib/prisma";
import { Applicant } from "@prisma/client";

export const shortlistCandidate = async ({
  job_id,
  id,
}: Pick<Applicant, "job_id" | "id">) => {
  try {
    const response = await prisma.applicant.update({
      where: {
        id,
        job_id,
      },
      data: {
        is_shortlisted: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
