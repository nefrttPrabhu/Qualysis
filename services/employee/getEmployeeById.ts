import { prisma } from "@/lib/prisma";
import { Company, Employee } from "@prisma/client";

export const getEmployeeById = async ({
  user_id,
}: Pick<Employee, "user_id">) => {
  try {
    const response = await prisma.employee.findMany({
      where: {
        user_id,
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
