// ./components/Posts.tsx

import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { dataset, projectId } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="container mx-auto flex flex-col gap-12 overflow-y-auto pb-12">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            href={`/movies/${post.slug.current}`}
            className="flex flex-col md:flex-row justify-between gap-12"
          >
            {post.mainImage ? (
              <div className="flex relative w-full md:w-1/2 max-w-screen-sm aspect-[5/3] overflow-hidden p-0">
                <Image
                  className="rounded-lg object-cover m-0 p-0"
                  src={builder
                    .image(post.mainImage)
                    .width(500)
                    .height(300)
                    .quality(80)
                    .fit("crop")
                    .url()}
                  fill
                  alt={post.mainImage.alt || ""}
                />
              </div>
            ) : null}
            <div className="p-4 text-4xl font-[800] w-full md:w-1/2 flex flex-col gap-4 justify-between">
              <h2 className="border-b pb-1">{post.title}</h2>
              <div className="prose prose-invert line-clamp-[6]">
                <PortableText value={post.body} />
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}
