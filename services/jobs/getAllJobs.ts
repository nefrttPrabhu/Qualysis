import { prisma } from "@/lib/prisma";

export const getAllJobs = async () => {
  try {
    const response = await prisma.jobs.findMany({
      where: {
        is_closed: false,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
