import { prisma } from "@/lib/prisma";
import { Applicant } from "@prisma/client";

export const getAllApplicants = async ({
  job_id,
}: Pick<Applicant, "job_id">) => {
  try {
    const response = await prisma.applicant.findMany({
      where: {
        job_id,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
