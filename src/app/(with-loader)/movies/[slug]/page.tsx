import { QueryParams, SanityDocument } from "next-sanity";
import { MOVIE_POSTS_QUERY, MOVIE_POST_QUERY } from "@/sanity/lib/queries";
import Post from "@/src/components/movies/movie-post";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(MOVIE_POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const data = await client.fetch<SanityDocument>(MOVIE_POST_QUERY, params, {
    cache: "force-cache",
    next: { tags: ["moviePost"] },
  });
  return <Post post={data} />;
}
