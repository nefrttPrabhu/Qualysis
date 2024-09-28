import { createCandidateAction } from "@/actions/user/createCandidateAction"
import Loading from "@/components/Loading"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getUserById } from "@/services/user/getUser"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";

interface iCandidateOnboardPageParams {
  params: {
    id: string
  }
}
export default async function CandidateOnboardPage({ params }: iCandidateOnboardPageParams) {
  const { exists, data } = await getUserById({ id: params.id });

  if (exists && data?.role != "CANDIDATE") {
    redirect("/dashboard")
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Candidate Details</CardTitle>
          <CardDescription>Tell us more about yourself to find best jobs for you!</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createCandidateAction}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="resume_url">Resume link</Label>
                <Input name="resume_url" placeholder="https://abc.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="linkedin_url">Linkedin Profile</Label>
                <Input name="linkedin_url" id="linkedin_url" placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="github_url">Github Profile</Label>
                <Input name="github_url" id="github_url" placeholder="https://github.com/username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="portfolio_url">Portfolio Website</Label>
                <Input name="portfolio_url" id="portfolio_url" placeholder="https://abc.me" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location">Location</Label>
                <Input name="location" id="location" placeholder="123, ABC street, XYZ (221123)" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Your employment status</Label>
                <Select name="status">
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="UNEMPLOYED">Job Seeker</SelectItem>
                    <SelectItem value="EMPLOYED">Employeed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <input name="id" className="hidden" defaultValue={params.id} />
            <Loading />
            {/* <Button className="mt-4 w-full">Submit</Button> */}
          </form>
        </CardContent>
      </Card>
    </main>
  )
}