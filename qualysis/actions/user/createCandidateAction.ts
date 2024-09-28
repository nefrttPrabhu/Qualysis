"use server";

import { createCandidate } from "@/services/candidate/createCandidate";
import { userStatus } from "@prisma/client";
import { redirect } from "next/navigation";

export const createCandidateAction = async (formData: FormData) => {
  const response = await createCandidate({
    id: formData.get("id") as string,
    github_url: formData.get("github_url") as string,
    leetcode_url: formData.get("leetcode_url") as string,
    linkedin_url: formData.get("linkedin_url") as string,
    portfolio_url: formData.get("portfolio_url") as string,
    resume_url: formData.get("resume_url") as string,
    status: formData.get("status") as userStatus,
  });

  if (response != undefined) {
    redirect(`/dashboard/candidate/${response.id}`);
  } else {
    console.log("Some error from db");
  }
};
