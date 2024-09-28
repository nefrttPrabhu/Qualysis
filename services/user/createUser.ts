import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const createUser = async ({
  first_name,
  last_name,
  email,
  role,
  profile_image_url,
  status,
  id,
}: Pick<
  User,
  | "id"
  | "first_name"
  | "last_name"
  | "role"
  | "email"
  | "profile_image_url"
  | "status"
>) => {
  try {
    const resposne = await prisma.user.create({
      data: {
        id,
        first_name,
        last_name,
        email,
        role,
        profile_image_url,
        status,
      },
    });
    return resposne;
  } catch (error) {
    console.log(error);
  }
};
