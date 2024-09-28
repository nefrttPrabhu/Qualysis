import { CreateJobForm } from "../../[id]/form";

interface iCreateJobParams {
  params: {
    id: string
  }
}
export default async function CreateJob({ params }: iCreateJobParams) {
  return (
    <main className="z-10">
      <h1 className="text-2xl font-bold pb-4">CREATE JOB</h1>
      <CreateJobForm company_id={params.id} />
    </main>
  )
}