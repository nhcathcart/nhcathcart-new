// ./app/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { loadQuery } from "@/sanity/lib/store";
import { BLOG_POSTS_QUERY, BLOG_POST_QUERY } from "@/sanity/lib/queries";
import Post from "@/src/components/blog/blog-post";
import PostPreview from "@/src/components/blog/blog-post-preview";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(BLOG_POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(BLOG_POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  );
}
