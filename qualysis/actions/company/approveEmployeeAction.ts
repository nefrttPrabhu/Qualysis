"use server";

import { approveEmployee } from "@/services/company/approveEmployee";
import { revalidatePath } from "next/cache";

export const approveEmployeeAction = async (formdata: FormData) => {
  const response = await approveEmployee({
    user_id: formdata.get("user_id") as string,
    id: formdata.get("id") as string,
  });

  // TODO : write correct path here
  revalidatePath(`/dashboard/company/${response?.company.id}`);
};
