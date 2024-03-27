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
import { navOffset } from "./utils/constants";
import Link from "next/link";

export default async function Page() {
  const initial: any = await loadQuery<SanityDocument[]>(
    WElCOME_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  console.log(initial);
  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-6">
        <div className=" h-full flex flex-col md:flex-row w-full max-w-screen-lg gap-24 items-center justify-center translate-y-[-30px]">
          <div className="w-full md:w-1/2 flex flex-col gap-4 animate-fadein">
            <p className="text-3xl font-[400]">Hi my name is</p>
            <h1 className="text-4xl font-[600]">Nicholas Cathcart.</h1>
            <p className="text-3xl font-[400]">
              I build stuff for the internet.
            </p>
            <div className="text-lg flex flex-col gap-2">
              <p>
                Checkout the{" "}
                <Link href={"/blog"} className="text-accent">
                  blog
                </Link>{" "}
                for technical musings.{" "}
              </p>
              <p>
                There are thoughts on{" "}
                <Link href={"/movies"} className="text-accent">
                  movies
                </Link>{" "}
                ,{" "}
                <Link href={"/restaurants"} className="text-accent">
                  food
                </Link>{" "}
                , and{" "}
                <Link href={"/playlists"} className="text-accent">
                  music
                </Link>{" "}
                in the respective sections.{" "}
              </p>
              <p>
                For work stuff head over to{" "}
                <a
                  href="https://www.arcusdigital.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  arcusdigital.io.
                </a>
              </p>
              <p>
                Reach out{" "}
                <Link href={"/contact"} className="text-accent">
                  here
                </Link>{" "}
                for a chat.
              </p>
            </div>
          </div>
          <div className="z-[1000] bg-background pointer-events-none animate-fadeout md:animate-none absolute top-0 w-full h-full md:relative md:w-1/2 p-12">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
}
