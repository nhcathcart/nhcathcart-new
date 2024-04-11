import { client } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/src/components/blog/blog-posts";
import { SanityDocument } from "next-sanity";


export default async function Page() {
  const data = await client.fetch<SanityDocument[]>(
    BLOG_POSTS_QUERY,
    {},
    {
      // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
      cache: 'force-cache',
      next: {tags: ['blog-posts']},
    },
  )
  return (
    <Posts posts={data} />
  )
}
