import { draftMode } from "next/headers";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  draftMode().disable();
  return Response.redirect(new URL("/blog", request.url));
}
