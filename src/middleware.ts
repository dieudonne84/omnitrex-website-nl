import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Handle kluis.omnitrex.nl subdomain
  if (hostname.startsWith("kluis.")) {
    // Rewrite to /kluis path
    if (url.pathname === "/") {
      url.pathname = "/kluis";
      return NextResponse.rewrite(url);
    }
  }

  // Handle advies.omnitrex.nl subdomain
  if (hostname.startsWith("advies.")) {
    // Rewrite to /advies path
    if (url.pathname === "/") {
      url.pathname = "/advies";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)",
  ],
};
