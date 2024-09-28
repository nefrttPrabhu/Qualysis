"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ClockIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarLinks = () => {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const company_id = pathArr[pathArr.length - 1];

  const homePath = `/dashboard/company/${company_id}`
  const jobsPath = `/dashboard/company/jobs/${company_id}`;
  const createJobPath = `/dashboard/company/create/${company_id}`;
  const employeePath = `/dashboard/company/employee/${company_id}`;

  return (
    <main>
      <nav className="flex flex-col gap-1">
        {/* <Link
          className={`text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2  ${pathname == homePath ? "bg-gray-900" : "hover:bg-gray-900"} dark:text-gray-100`}
          href={homePath}
        >
          <HomeIcon className="h-5 w-5" />
          Home
        </Link> */}
        <Link className={`text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 ${pathname == jobsPath ? "bg-gray-900" : "hover:bg-gray-900"}`} href={jobsPath}>
          <ClockIcon className="h-5 w-5" />
          Jobs
        </Link>
        <Link className={`text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 ${pathname == createJobPath ? "bg-gray-900" : "hover:bg-gray-900"}`} href={createJobPath}>
          <ClockIcon className="h-5 w-5" />
          Create
        </Link>
        <Link className={`text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 ${pathname == createJobPath ? "bg-gray-900" : "hover:bg-gray-900"}`} href={employeePath}>
          <ClockIcon className="h-5 w-5" />
          Employees
        </Link>
        <Link className="text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900" href={employeePath}>
          <UserIcon className="h-5 w-5" />
          Interview
        </Link>
      </nav>
    </main >
  )
}