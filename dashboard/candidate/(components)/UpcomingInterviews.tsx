import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function UpcomingInterviews() {
    return (
        <main className="z-10">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">Upcoming Interviews</h1>
        </div>
        <div className="grid gap-4 p-8">
          <Card>
            <CardContent className="flex items-start gap-4 p-4 ">
              <div className="flex-1 backdrop-blur-[0.5px]">
                <CardHeader className="pb-4">
                  <div className="font-semibold">Google Product Manager</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Sarah Johnson</div>
                </CardHeader>
                <div className="flex items-center gap-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div className="flex flex-col">
                    <div className="m-0">Tomorrow, 10:00 AM</div>
                  </div>
                </div>
              </div>
              <Button className="w-20 h-10 flex items-center justify-center" variant="outline">
                Join
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-4">
              <div className="flex-1">
                <CardHeader className="pb-2">
                  <div className="font-semibold">Facebook UX Designer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Alex Lee</div>
                </CardHeader>
                <div className="flex items-center gap-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div className="flex flex-col">
                    <div className="m-0">Today, 3:00 PM</div>
                  </div>
                </div>
              </div>
              <Button className="w-20 h-10 flex items-center justify-center" variant="outline">
                Join
              </Button>
            </CardContent>
          </Card>
        </div>
        </main>
    )
}

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any specific props for your component here
}

function CalendarIcon(props : CalendarIconProps ) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}