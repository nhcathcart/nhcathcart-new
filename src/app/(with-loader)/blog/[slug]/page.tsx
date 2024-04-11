import { BLOG_POSTS_QUERY, BLOG_POST_QUERY } from "@/sanity/lib/queries";
import Post from "@/src/components/blog/blog-post";
import { client } from "@/sanity/lib/client";
import { QueryParams, SanityDocument } from "next-sanity";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(BLOG_POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const data = await client.fetch<SanityDocument>(BLOG_POST_QUERY, params, {
    cache: "force-cache",
    next: { tags: ["blog-posts "] },
  });
  return <Post post={data} />;
}
