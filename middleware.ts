import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request: NextRequest) {
  const pathname = request.url.split(":3000")[1];
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuthed = await isAuthenticated();
  if (!isAuthed) {
    return NextResponse.redirect("http://localhost:3000");
  }
}
export const config = {
  matcher: [
    "/onboard",
    "/onboard/candidate/:path*",
    "/onboard/employee/:path*",
    "/onboard/company/:path",
    "/dashboard",
  ],
};
