import { prisma } from "@/lib/prisma";
import { Company } from "@prisma/client";

export const getCompanyByCuid = async ({ id }: Pick<Company, "id">) => {
  try {
    const response = await prisma.company.findUnique({
      where: {
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
