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

export const EmpCard = async ({ employee }: { employee: any }) => {
  return (
    <Card className="pt-4 w-[30rem]">
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
              Github
            </Link>
            <Link href={employee.linkedin_url}>
              Linkedin
            </Link>
          </div>
        </div>
        <div>{`Status : ${!employee.is_approved ? "Pending" : "Approved"}`}</div>
      </CardContent>
    </Card>
  )
}