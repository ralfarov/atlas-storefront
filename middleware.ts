import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const existingRequestId = request.headers.get("x-request-id");
  const requestId = existingRequestId || crypto.randomUUID();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-request-id", requestId);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("x-request-id", requestId);
  response.headers.set("x-atlas-platform", "atlas-vercel-lab");

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};