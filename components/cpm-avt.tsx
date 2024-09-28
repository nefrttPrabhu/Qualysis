"use client";

import { usePathname } from "next/navigation";
import { CompanySidebarAvatar } from "./company-avatar";

export const CpmAvt = () => {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const company_id = pathArr[pathArr.length - 1];
  return (
    <CompanySidebarAvatar id={company_id} />
  )
}