import { POSTS_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import Posts from "@/src/components/movies/movie-posts";
import PostsPreview from "@/src/components/movies/movie-posts-preview";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  );
}
