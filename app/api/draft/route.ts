import { draftMode } from "next/headers";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const expectedSecret = process.env.SANITY_PREVIEW_SECRET;

  if (expectedSecret && secret !== expectedSecret) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();
  const redirectUrl = slug ? `/blog/${slug}` : "/blog";

  return Response.redirect(new URL(redirectUrl, request.url));
}
