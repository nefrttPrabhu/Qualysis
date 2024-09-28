import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getCompanyByCuid } from "@/services/company/getCompanyByCuid"
import { getJobsCreatedByCompanyCuid } from "@/services/jobs/getJobsCreatedByCompanyCuid"
import { redirect } from "next/navigation"
import { getAllJobs } from "@/services/jobs/getAllJobs"
import { Button } from "@/components/ui/button"
import { getUserById } from "@/services/user/getUser"
import { applyForJobsAction } from "@/actions/applyForJobAction"

interface iJobsPageParasm {
  params: {
    id: string
  }
}
export default async function JobsPage({ params }: iJobsPageParasm) {
  const jobs = await getAllJobs();
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Active Job Posts</h1>
      <div className="flex flex-col justify-between items-start gap-6">
        {jobs?.map((job, i) => (
          <Card className="w-[45rem]" key={i}>
            <CardHeader>
              <CardTitle>{job.role}</CardTitle>
              <CardDescription>{job.job_description}</CardDescription>
            </CardHeader>
            <CardContent className=" text-gray-500">
              <div>{"Years of Experience Required: "} {job.exp_required}</div>
              <div>{"Status:"} {job.is_closed ? <Badge>Closed</Badge> : <Badge>Open</Badge>}</div>
              <div className="flex justify-end">
                {/* <form>
                  <Button>Apply</Button>
                </form> */}
                <ApplyButtonDialog user_id={params.id} job_id={job.id} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

const ApplyButtonDialog = async ({ user_id, job_id }: { user_id: string, job_id: string }) => {
  const { exists, data } = await getUserById({ id: user_id });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Apply</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply For Job</DialogTitle>
          <DialogDescription>
            Please review your job application
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Cover Letter
            </Label>
            <Input
              name="cover_letter"
              defaultValue="I am a passionate...."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <form action={applyForJobsAction}>
            <input name="cover_letter" className="hidden" defaultValue={"I am skill developer"} />
            <input name="job_id" className="hidden" defaultValue={job_id} />
            <input name="user_id" className="hidden" defaultValue={user_id} />
            <Button type="submit">Apply</Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}