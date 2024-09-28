import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { approveEmployeeAction } from "@/actions/company/approveEmployeeAction";
import { disapproveEmployeeAction } from "@/actions/company/disapproveEmployeeAction";
import { GithubIcon, Linkedin } from "lucide-react";


export const EmployeeRequestCard = async ({ employee }: { employee: any }) => {

  return (
    <Card className="pt-4 w-[35rem]">
      <CardContent className="flex flex-col justify-start gap-2">
        <div className="flex justify-start items-center gap-3">
          <img src={employee.user.profile_image_url} className="w-12 h-12 rounded-full border-2 border-red-50" alt="User proflie image" />
          <div>
            <h1 className="text-lg font-semibold">{`${employee.user.first_name} ${employee.user.last_name}`}</h1>
            <CardDescription>{employee.designation}</CardDescription>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {"Experience: "} <span>{employee.years_of_experience}</span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <Link href={employee.github_url}>
              <GithubIcon />
            </Link>
            <Link href={employee.linkedin_url}>
              <Linkedin />
            </Link>
          </div>
        </div>
        <div>{`Status : ${!employee.is_approved ? "Pending" : "Approved"}`}</div>
        <div className="flex justify-end items-center gap-2">
          <form action={disapproveEmployeeAction}>
            <input name="id" className="hidden" defaultValue={employee.id} />
            <input name="user_id" className="hidden" defaultValue={employee.user_id} />
            <Button variant={"destructive"}>Reject</Button>
          </form>
          <form action={approveEmployeeAction}>
            <input name="id" className="hidden" defaultValue={employee.id} />
            <input name="user_id" className="hidden" defaultValue={employee.user_id} />
            <Button>Approve</Button>
          </form>
        </div>
      </CardContent>
    </Card>

  )
}