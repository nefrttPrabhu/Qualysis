import { prisma } from "@/lib/prisma";
import { Applicant } from "@prisma/client";

export const getApplicantByTheirId = async ({
  id,
  job_id,
}: Pick<Applicant, "id" | "job_id">) => {
  try {
    const response = await prisma.applicant.findMany({
      where: {
        job_id,
        id,
      },
    });
    if (response == null) {
      return { exists: false, data: null };
    }
    return { exists: true, data: response };
  } catch (error) {
    console.log(error);
    return { exists: undefined, data: null };
  }
};
