import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestId = request.headers.get("x-request-id") || crypto.randomUUID();

  const body = {
    status: "ok",
    service: "atlas-storefront",
    platform: "vercel",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(body, {
    headers: {
      "X-App-Origin": "vercel-storefront",
      "X-Atlas-Platform": "atlas-vercel-lab",
      "X-Request-ID": requestId,
      "Cache-Control": "no-store",
    },
  });
}