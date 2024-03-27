import { BLOG_POSTS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import Posts from "@/src/components/blog/blog-posts";
import PostsPreview from "@/src/components/blog/blog-posts-preview";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    BLOG_POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  console.log("initial", initial);
  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  );
}
