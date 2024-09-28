import { prisma } from "@/lib/prisma";

export const getAllJobApplicantsByJobId = async ({
  job_id,
}: {
  job_id: string;
}) => {
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
