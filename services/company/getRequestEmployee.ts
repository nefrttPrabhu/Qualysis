import { prisma } from "@/lib/prisma";
import { Employee } from "@prisma/client";

export const getRequestEmployee = async ({
  company_id,
}: Pick<Employee, "company_id">) => {
  try {
    const response = await prisma.employee.findMany({
      where: {
        company_id,
        is_invalid: false,
        is_approved: false,
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
