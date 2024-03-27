// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import Posts from "@/src/components/movies/movie-posts";
import PostsPreview from "@/src/components/movies/movie-posts-preview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, WElCOME_QUERY } from "@/sanity/lib/queries";
import { Logo } from "../components/loader/logo";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function Page() {
  const initial: any = await loadQuery<SanityDocument[]>(
    WElCOME_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
    console.log(initial)
  return (
    <>
      <h1 className="text-5xl">{initial.data.message}</h1>
      <div className="flex h-full w-full">
        Hi I&apos;m Nick
      </div>
    </>
  );
}
