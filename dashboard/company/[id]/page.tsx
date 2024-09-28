import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { CalendarIcon, ClockIcon, HomeIcon, UserIcon } from "lucide-react"
import { CreateJobForm } from "./form"
import { getCompanyByCuid } from "@/services/company/getCompanyByCuid"
import { redirect } from "next/navigation"
import { getJobsCreatedByCompanyCuid } from "@/services/jobs/getJobsCreatedByCompanyCuid"
import { getRequestEmployee } from "@/services/company/getRequestEmployee"
import { EmployeeRequestCard } from "@/components/custom/employee-req-card"
import { getAllEmployee } from "@/services/company/getAllEmployee"
import SideBar from "../../candidate/(components)/Sidebar"
import { CompanySidebar } from "./sidebar"

interface iCompanyDashboardPageParams {
  params: {
    id: string
  }
}
export default async function CompanyDashboardPage({ params }: iCompanyDashboardPageParams) {
  const { exists, data } = await getCompanyByCuid({ id: params.id })
  if (!exists) {
    redirect("/")
  }

  // jobs created
  const jobsCreated = await getJobsCreatedByCompanyCuid({ id: params.id });

  // employee request 
  const employeeRequest = await getRequestEmployee({
    company_id: params.id
  })

  // approved employee
  const approvedEmployee = await getAllEmployee({ id: params.id })

  return (
    <main className="w-full flex flex-col justify-center items-center gap-4">
      <div>
        <h1 className="text-2xl">COMPANY DETAILS</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>

      </div>
      <div>
        <h1 className="text-2xl">CREATE JOB</h1>
        <CreateJobForm company_id={params.id} />
      </div>
      <div>
        <h1 className="text-2xl">JOBS CREATED</h1>
        <pre>{JSON.stringify(jobsCreated, null, 2)}</pre>
      </div>
      <div>
        <h1 className="text-2xl">APPROVED EMPLOYEE</h1>
        <pre>{JSON.stringify(approvedEmployee, null, 2)}</pre>
      </div>
      <div>
        <h1 className="text-2xl">PENDING EMPLOYEE REQUESTS</h1>
        <pre>{JSON.stringify(employeeRequest, null, 2)}</pre>
      </div>

      <div>
        <h1 className="text-2xl">HANDLE EMPLOYEE REQUESTS</h1>
        {employeeRequest?.map((employee, i) => (
          <EmployeeRequestCard key={i} employee={employee} />
        ))}
      </div>
    </main>
  )
}