"use server";

import { getCompanyById } from "@/services/company/getCompanyById";
import { createUser } from "@/services/user/createUser";
import { userRole } from "@prisma/client";
import { redirect } from "next/navigation";

export const createUserAction = async (formData: FormData) => {
  const role = formData.get("role") as userRole;
  const response = await createUser({
    id: formData.get("id") as string,
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    profile_image_url: (formData.get("profile_image_url") as string) || null,
    status: role === "CANDIDATE" ? "UNEMPLOYED" : "EMPLOYED",
    role,
  });

  if (response !== undefined) {
    if (role === "CANDIDATE") {
      redirect(`/onboard/candidate/${response.id}`);
    } else if (role == "COMPANY") {
      const { exists, data } = await getCompanyById({
        user_id: formData.get("id") as string,
      });
      if (exists && data != null) {
        redirect(`/onboard/company/${data.id}`);
      } else {
        redirect("/");
      }
    } else {
      redirect(`/onboard/employee/${response.id}`);
    }
  } else {
    console.log("Error creating user");
  }
};
