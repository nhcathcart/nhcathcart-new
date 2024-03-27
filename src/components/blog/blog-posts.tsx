// ./components/Posts.tsx

import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { dataset, projectId } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import CodeBlock from "@/src/components/blog/code-block";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div className="mx-auto max-w-screen-xl px-6 pt-4 pb-12 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
          Tech! Fun!
        </h2>
        <p className="mt-2 text-lg leading-8 text-text">
          Musing on tech thats new to me, slick in some way, or just fun to play with.
        </p>
        <div className="mt-8 space-y-20 lg:mt-12 lg:space-y-20">
          {posts.map((post) => (
            <article
              key={post._id}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-[5/3] lg:w-64 lg:shrink-0">
                <a href={`/movies/${post.slug.current}`}>
                  <Image
                    src={builder
                      .image(post.mainImage)
                      .width(500)
                      .height(300)
                      .quality(80)
                      .fit("crop")
                      .url()}
                    alt=""
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                </a>
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post._createdAt} className="text-text">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <div className="flex gap-2">
                    {post?.categories?.map((item: any) => {
                      return (
                        <p
                          key={item._id}
                          className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600"
                        >
                          {item.title}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-text">
                    <a href={`/movies/${post.slug.current}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <div className="mt-5 text-sm leading-6 text-text prose prose-invert line-clamp-3">
                    <PortableText value={post.body} />
                  </div>
                </div>
                <div className="mt-6 flex pt-6">
                  <div className="relative flex items-center gap-x-4">
                    <Image
                      src={builder
                        .image(post.author.image)
                        .width(100)
                        .height(100)
                        .quality(100)
                        .fit("crop")
                        .url()}
                      alt=""
                      height={40}
                      width={40}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold">
                        <a href={post.author}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
