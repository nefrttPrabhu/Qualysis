import { prisma } from "@/lib/prisma";
import { Company } from "@prisma/client";

export const getJobsCreatedByCompanyCuid = async ({
  id,
}: Pick<Company, "id">) => {
  try {
    const response = await prisma.jobs.findMany({
      where: {
        company_id: id,
        is_closed: false,
      },
      include: {
        applicants: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
