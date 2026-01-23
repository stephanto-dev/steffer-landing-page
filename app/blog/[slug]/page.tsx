import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { format } from "date-fns";
import { draftMode } from "next/headers";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getClient } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { postBySlugQuery } from "@/sanity/queries";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: {
    asset?: { _ref: string };
  };
  publishedAt?: string;
  _updatedAt?: string;
  body?: PortableTextBlock[];
};

type BlogPostParams = { slug: string };
type BlogPostPageProps = {
  params: BlogPostParams | Promise<BlogPostParams>;
};

const resolveParams = async (
  params: BlogPostPageProps["params"],
): Promise<BlogPostParams> => {
  return Promise.resolve(params);
};

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { _ref: string } } }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).width(1400).height(900).url();

      return (
        <Image
          src={imageUrl}
          alt=""
          width={1400}
          height={900}
          sizes="(min-width: 1024px) 768px, 100vw"
          className="my-8 h-auto w-full rounded-2xl"
        />
      );
    },
  },
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await resolveParams(params);
  if (!slug) {
    return {};
  }

  const { isEnabled } = await draftMode();
  const post = await getClient(isEnabled).fetch<BlogPost | null>(
    postBySlugQuery,
    {
      slug,
    },
  );

  if (!post) {
    return {};
  }

  const baseUrl = "https://www.steffer.com.br";
  const canonical = `${baseUrl}/blog/${slug}`;
  const cover = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : undefined;
  const description = post.excerpt || undefined;

  return {
    title: `${post.title} | Steffer`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      type: "article",
      images: cover
        ? [
            {
              url: cover,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await resolveParams(params);
  if (!slug) {
    notFound();
  }

  const { isEnabled } = await draftMode();
  const post = await getClient(isEnabled).fetch<BlogPost | null>(
    postBySlugQuery,
    {
      slug,
    },
  );

  if (!post) {
    notFound();
  }

  const cover = post.coverImage
    ? urlFor(post.coverImage).width(1600).height(900).url()
    : null;
  const publishedAt = post.publishedAt
    ? format(new Date(post.publishedAt), "dd/MM/yyyy")
    : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: cover ? [cover] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Steffer",
      url: "https://www.steffer.com.br",
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // JSON.stringify garante JSON valido sem precisar de sanitizacao manual.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 space-y-4">
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {publishedAt ? `Publicado em ${publishedAt}` : "Post"}
          </p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="text-base text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>
          ) : null}
        </div>

        {cover ? (
          <Image
            src={cover}
            alt={post.title}
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 768px, 100vw"
            className="mb-10 h-auto w-full rounded-2xl"
          />
        ) : null}

        {post.body ? (
          <div className="prose prose-invert prose-sm max-w-none sm:prose-base lg:prose-lg">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        ) : (
          <p className="text-muted-foreground">Post sem conteudo.</p>
        )}
      </article>
      <Footer />
    </main>
  );
}
