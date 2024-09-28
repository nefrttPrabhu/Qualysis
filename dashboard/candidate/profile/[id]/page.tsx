import { prisma } from "@/lib/prisma"

interface iProfilePageParams {
  params: {
    id: string
  }
}
export default async function profilePage({ params }: iProfilePageParams) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
  return (
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}