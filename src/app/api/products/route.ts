import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(request: Request) {
  const requestId = request.headers.get("x-request-id") || crypto.randomUUID();

  const body = {
    products,
    count: products.length,
  };

  return NextResponse.json(body, {
    headers: {
      "X-App-Origin": "vercel-storefront",
      "X-Atlas-Platform": "atlas-vercel-lab",
      "X-Request-ID": requestId,
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}