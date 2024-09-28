import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DashboardPage() {
  return (
    <>
      <div>This is dashboard page</div>
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </>
  )
}