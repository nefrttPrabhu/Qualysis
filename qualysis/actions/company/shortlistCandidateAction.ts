"use server";

import { shortlistCandidate } from "@/services/company/shortlistCandidate";
import { revalidatePath } from "next/cache";

export const shortlistCandidateAction = async (formData: FormData) => {
  const response = await shortlistCandidate({
    id: formData.get("id") as string,
    job_id: formData.get("job_id") as string,
  });

  // TODO: revalidate right path
  revalidatePath("/");
};
