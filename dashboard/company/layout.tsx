import { ReactNode } from "react";
import { CompanySidebar } from "./[id]/sidebar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ComapnyDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-12 items-start gap-10 w-full max-w-10xl py-6 px-4 mx-auto">
      <CompanySidebar />
      <div className="md:col-span-9 grid gap-6 z-10">
        {children}
      </div>
      <BackgroundBeams />
    </div>
  )
}