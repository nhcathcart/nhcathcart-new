// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import Posts from "@/src/components/posts";
import PostsPreview from "@/src/components/posts-preview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Logo } from "../components/loader/logo";
import Image from "next/image";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <>
      <div className="w-[400px] h-[400px]">
        <Logo />
      </div>
    </>
  );
}
