import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

type SanityWebhookBody = {
  _type?: string;
  slug?: { current?: string } | string;
};

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "Missing SANITY_REVALIDATE_SECRET" },
      { status: 500 },
    );
  }

  const incomingSecret =
    request.headers.get("x-revalidate-secret") ||
    new URL(request.url).searchParams.get("secret");

  if (incomingSecret !== secret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = (await request.json()) as SanityWebhookBody;
  const slug =
    typeof body.slug === "string" ? body.slug : body.slug?.current || null;

  revalidateTag("blog", "default");
  revalidatePath("/blog");

  if (slug) {
    revalidateTag(`post:${slug}`, "default");
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    slug,
    timestamp: new Date().toISOString(),
  });
}
