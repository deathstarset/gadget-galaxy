import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(async function (request, session) {
  if (!request.nextauth.token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  const role = request.nextauth.token.user.role;
  if (role !== "admin") {
    return NextResponse.redirect(new URL("/store", request.url));
  }
});

export const config = {
  matcher: "/admin/:path*",
};

// for rendering stuff based on wether the user is logged in or not we just check for the cookie and if its there we do it
