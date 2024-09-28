import Header from "@/app/dashboard/candidate/(components)/Header"
import SideBar from "../(components)/Sidebar"
import UpcomingInterviews from "../(components)/UpcomingInterviews"
import PastInterviews from "../(components)/PastInterviews"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Component() {
  return (
    <main >
      <UpcomingInterviews />
      <PastInterviews />
    </main>
  )
}

