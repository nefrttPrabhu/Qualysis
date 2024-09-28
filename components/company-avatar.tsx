import { getCompanyByCuid } from "@/services/company/getCompanyByCuid"
import { Avatar } from "./ui/avatar"
import { useEffect, useState } from "react"

export const CompanySidebarAvatar = ({ id }: { id: string }) => {
  const [companyName, setCompanyName] = useState("");
  const [comanyImage, setCompanyImage] = useState("");
  const hanldeGetCompanyDetails = async () => {
    const { exists, data } = await getCompanyByCuid({ id });
    if (exists) {
      console.log(data);
    }
  }

  useEffect(() => {
    hanldeGetCompanyDetails();
  }, [])
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-10 h-10">
        <img
          alt="Avatar"
          className="rounded-full"
          height="40"
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
      </Avatar>
      <div className="flex flex-col">
        <div className="font-semibold line-clamp-1">Lana Brown</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Interviewee</div>
      </div>
    </div>
  )
}