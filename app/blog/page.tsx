import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import { draftMode } from "next/headers";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getClient } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { postsQuery } from "@/sanity/queries";

type PostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: {
    asset?: { _ref: string };
  };
  publishedAt?: string;
};

export default async function BlogPage() {
  const { isEnabled } = draftMode();
  const posts = await getClient(isEnabled).fetch<PostCard[]>(postsQuery);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">
            Insights sobre dados, automacao e IA
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Publicacoes sobre estrategia, tecnologia e casos reais para acelerar
            crescimento.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            const cover = post.coverImage
              ? urlFor(post.coverImage).width(1200).height(800).url()
              : null;
            const publishedAt = post.publishedAt
              ? format(new Date(post.publishedAt), "dd/MM/yyyy")
              : null;

            return (
              <article
                key={post._id}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card/30 transition hover:border-primary/40"
              >
                <Link href={`/blog/${post.slug.current}`} className="block">
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
                        Sem imagem
                      </div>
                    )}
                  </div>
                  <div className="space-y-3 px-6 py-6">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span>Post</span>
                      {publishedAt ? (
                        <span className="h-[1px] flex-1 bg-border" />
                      ) : null}
                      {publishedAt ? <span>{publishedAt}</span> : null}
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {post.title}
                    </h2>
                    {post.excerpt ? (
                      <p className="text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
