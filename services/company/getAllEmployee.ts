import { prisma } from "@/lib/prisma";
import { Company } from "@prisma/client";

export const getAllEmployee = async ({ id }: Pick<Company, "id">) => {
  try {
    const response = await prisma.employee.findMany({
      where: {
        company_id: id,
        is_approved: true,
        is_invalid: false,
      },
      include: {
        user: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
