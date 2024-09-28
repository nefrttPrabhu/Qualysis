import { Avatar } from "@/components/ui/avatar"
import { CalendarIcon, ClockIcon, HomeIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { CSidebarLinks } from "./csidebar-links"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";


export default function SideBar() {
  return (
    <div className="md:col-span-3 grid gap-3 z-10">
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
      <CSidebarLinks />
      <div className="text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900">
        <LogoutLink>Log out</LogoutLink>
      </div>
    </div>
  )
}