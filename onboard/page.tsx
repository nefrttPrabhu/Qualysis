import { createUserAction } from "@/actions/user/createUserAction"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getCompanyById } from "@/services/company/getCompanyById"
import { getUserById } from "@/services/user/getUser"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
export default async function OnboardPage() {

  const { getUser } = getKindeServerSession()
  const user = await getUser();
  const { exists, data: userDetails } = await getUserById({ id: user?.id as string })
  if (exists) {
    if (userDetails?.role == "COMPANY") {
      const { exists, data } = await getCompanyById({ user_id: user?.id as string });
      if (exists && data != null) {
        redirect(`/dashboard/company/jobs/${data.id}`)
      } else {
        redirect("/");
      }
    } else if (userDetails?.role == "CANDIDATE") {
      redirect(`/dashboard/candidate/${user?.id as string}`);
    } else {
      // TODO : handle redirects for employee late
      redirect(`/dashboard/candidate/${user?.id as string}`);
    }
  }
  return (
    <main className="h-screen w-full flex justify-center items-center ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Select Role</CardTitle>
          <CardDescription>Tell us more about how you would like to use our platform</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createUserAction}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Your Role</Label>
                <Select name="role">
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="CANDIDATE">Job Seeker</SelectItem>
                    <SelectItem value="EMPLOYEE">Interviewer</SelectItem>
                    <SelectItem value="COMPANY">Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <input name="id" className="hidden" defaultValue={user?.id as string} />
            <input name="email" className="hidden" defaultValue={user?.email as string} />
            <input name="first_name" className="hidden" defaultValue={user?.given_name as string} />
            <input name="last_name" className="hidden" defaultValue={user?.family_name as string} />
            <input name="profile_image_url" className="hidden" defaultValue={user?.picture as string} />

            <Button type="submit" className="w-full mt-4">Next</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}