import { prisma } from "@/lib/prisma";
import { Company } from "@prisma/client";

export const getCompanyById = async ({ user_id }: Pick<Company, "user_id">) => {
  try {
    const response = await prisma.company.findFirst({
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
