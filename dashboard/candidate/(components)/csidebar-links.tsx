"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ClockIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CSidebarLinks = () => {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const company_id = pathArr[pathArr.length - 1];

  const homePath = `/dashboard/candidate/${company_id}`
  const jobsPath = `/dashboard/candidate/jobs/${company_id}`;
  const profilePath = `/dashboard/candidate/profile/${company_id}`;
  // const employeePath = `/dashboard/company/employee/${company_id}`;

  return (
    <main>
      <nav className="flex flex-col gap-1">
        <Link className={`text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 ${pathname == homePath ? "bg-gray-900" : "hover:bg-gray-900"}`} href={homePath}>
          <HomeIcon className="h-5 w-5" />
          Home
        </Link>
        <Link className={`text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 ${pathname == jobsPath ? "bg-gray-900" : "hover:bg-gray-900"}`} href={jobsPath}>
          <ClockIcon className="h-5 w-5" />
          Openings
        </Link>
        <Link className={`text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 ${pathname == profilePath ? "bg-gray-900" : "hover:bg-gray-900"}`} href={profilePath}>
          <ClockIcon className="h-5 w-5" />
          Profile
        </Link>
      </nav>
    </main >
  )
}