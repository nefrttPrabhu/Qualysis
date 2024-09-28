import { EmpCard } from "@/components/custom/emp-card"
import { EmployeeRequestCard } from "@/components/custom/employee-req-card"
import { getAllEmployee } from "@/services/company/getAllEmployee"
import { getCompanyByCuid } from "@/services/company/getCompanyByCuid"
import { getRequestEmployee } from "@/services/company/getRequestEmployee"
import { redirect } from "next/navigation"

interface iEmployeePageParams {
  params: {
    id: string
  }
}
export default async function EmployeePage({ params }: iEmployeePageParams) {
  const { exists, data } = await getCompanyByCuid({ id: params.id })
  if (!exists) {
    redirect("/")
  }

  // employee request 
  const employeeRequest = await getRequestEmployee({
    company_id: params.id
  })

  // approved employee
  const approvedEmployee = await getAllEmployee({ id: params.id })
  return (
    <main className="w-full flex flex-col justify-start items-start gap-4">
      <div className="flex justify-start items-start gap-4 flex-col">
        <h1 className="text-2xl font-bold">Employees</h1>
        {/* <pre>{JSON.stringify(approvedEmployee, null, 2)}</pre> */}
        {approvedEmployee?.map((emp, i) => (
          <EmpCard employee={emp} key={i} />
        ))}
      </div>
      {employeeRequest?.length != 0 && <div className="flex justify-start items-start gap-4 flex-col">
        <h1 className="text-2xl font-bold">Employee Requests</h1>
        {employeeRequest?.map((employee, i) => (
          <EmployeeRequestCard key={i} employee={employee} />
        ))}
      </div>}

    </main>
  )
}