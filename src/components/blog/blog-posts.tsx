// ./components/Posts.tsx

import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { dataset, projectId } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    
        <div className="flex flex-col">
          {posts.map((post) => (
            <article
              key={post._id}
              className="relative isolate flex flex-col gap-8 lg:flex-row py-8 md:py-16 border-b border-text border-opacity-50"
            >
              <div className="relative aspect-square w-full lg:w-64 lg:shrink-0">
                <a href={`/blog/${post.slug.current}`}>
                  <Image
                    src={builder
                      .image(post.mainImage)
                      .width(500)
                      .height(500)
                      .quality(90)
                      .fit("crop")
                      .url()}
                    alt=""
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-scale-down"
                  />
                </a>
              </div>
              <div className="flex flex-col justify-between min-h-full">
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-text">
                    <a href={`/blog/${post.slug.current}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <div className="mt-5 text-sm leading-6 text-text prose prose-invert line-clamp-5">
                    {/* <PortableText value={post.body} /> */}
                    {post.description}
                  </div>
                </div>
                <div className="mt-1 flex pt-6 border-t border-text border-opacity-30">
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
                    <div className="text-sm leading-6 ">
                      <p className="font-semibold flex flex-col">
                        <a href={post.author}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                        <time dateTime={post._createdAt} className="text-text text-xs font-thin">
                          {new Date(post._createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
     
  );
}
