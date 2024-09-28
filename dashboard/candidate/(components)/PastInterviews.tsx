import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function PastInterviews() {
  return (
    <div className="grid gap-4 p-8 z-10">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold">Past Interviews</h2>
        <Link className="text-sm underline ml-auto" href="#">
          View all
        </Link>
      </div>
      <Card>
        <CardContent className="flex items-start gap-4 p-4">
          <div className="flex-1">
            <CardHeader className="pb-2">
              <div className="font-semibold">Amazon Software Engineer</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Mark Smith</div>
            </CardHeader>
            <div className="flex items-center gap-2 mt-4">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div className="flex flex-col">
                <div className="m-0">March 10, 2024, 2:00 PM</div>
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-start gap-4 p-4">
          <div className="flex-1">
            <CardHeader className="">
              <div className="font-semibold">Apple Marketing Manager</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Emily White</div>
            </CardHeader>
            <div className="flex items-center gap-2 mt-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div className="flex flex-col">
                <div className="m-0">February 28, 2024, 11:00 AM</div>
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
  // Add any specific props for your component here
}

function CalendarIcon(props: CalendarIconProps) {
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