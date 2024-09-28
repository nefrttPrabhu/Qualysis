"use server";

import { applyForJob } from "@/services/candidate/applyForJob";
import { getUserById } from "@/services/user/getUser";
import { redirect } from "next/navigation";

export const applyForJobsAction = async (formData: FormData) => {
  const user_id = formData.get("user_id") as string;
  const userDetails = await getUserById({ id: user_id });
  console.log(userDetails);

  const response = await applyForJob({
    user_id,
    job_id: formData.get("job_id") as string,
    cover_letter: formData.get("cover_letter") as string,
    github_url: userDetails.data?.github_url as string,
    leetcode_url: userDetails.data?.leetcode_url as string,
    linkedin_url: userDetails.data?.linkedin_url as string,
    portfolio_url: userDetails.data?.portfolio_url as string,
    resume_url: userDetails.data?.resume_url as string,
  });

  redirect(`/dashboard/candidate/${user_id}`);
};
