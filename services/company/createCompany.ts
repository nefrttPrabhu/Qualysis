import { prisma } from "@/lib/prisma";
import { Company } from "@prisma/client";

export const createCompany = async ({
  name,
  description,
  location,
  company_email,
  website_url,
  user_id,
}: Pick<
  Company,
  | "name"
  | "description"
  | "company_email"
  | "location"
  | "website_url"
  | "user_id"
>) => {
  try {
    const response = await prisma.company.create({
      data: {
        user_id,
        name,
        description,
        location,
        company_email,
        website_url,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
