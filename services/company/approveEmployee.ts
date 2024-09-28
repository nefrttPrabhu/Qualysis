import { prisma } from "@/lib/prisma";
import { Employee } from "@prisma/client";

export const approveEmployee = async ({
  id,
  user_id,
}: Pick<Employee, "id" | "user_id">) => {
  try {
    const response = await prisma.employee.update({
      where: {
        id,
        user_id,
      },
      data: {
        is_approved: true,
        is_invalid: false,
      },
      include: {
        company: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
