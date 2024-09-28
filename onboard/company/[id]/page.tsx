import { createCompanyAction } from "@/actions/company/createCompanyAction"
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
import { Textarea } from "@/components/ui/textarea"
import { getCompanyById } from "@/services/company/getCompanyById"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

interface iCompanyOnboardPageParams {
  params: {
    id: string
  }
}
export default async function CompanyOnboardPage({ params }: iCompanyOnboardPageParams) {

  const { exists } = await getCompanyById({ user_id: params.id });
  // if (exists) {
  //   // redirect("/dashboard");

  // }

  // TODO : add redirects if anyone else comes on this url

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>Tell us more about your company to get more reach</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createCompanyAction}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Name of your company" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea name="description" placeholder="Tell us what you do" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="company_email">Company Email</Label>
                <Input name="company_email" id="company_email" placeholder="abc@org.ac.in" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" placeholder="123, ABC street, XYZ (221123)" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="website_url">Website</Label>
                <Input id="website_url" name="website_url" placeholder="https://abc.com" />
              </div>
            </div>
            <input className="hidden" name="user_id" defaultValue={params.id} />
            <Loading />
            {/* <Button type="submit" className="mt-4 w-full">Submit</Button> */}
          </form>
        </CardContent>
      </Card>
    </main>
  )
}