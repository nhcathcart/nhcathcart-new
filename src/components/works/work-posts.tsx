// ./components/Posts.tsx

import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { dataset, projectId } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({ projectId, dataset });
export interface Props {
  posts: SanityDocument[];
}
export default function WorkPosts({ posts }: Props) {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <div
          key={post._id}
          className="relative flex flex-col gap-8 lg:flex-row lg:justify-between py-8 md:py-16 border-b border-text border-opacity-50"
        >
          <div className="group relative max-w-xl flex-grow flex-col justify-betwen min-h-full">
            <h3 className="mt-3 text-2xl font-semibold leading-6 text-text">
              <a href={post.url}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <div className="mt-5 text-sm leading-6 text-text prose prose-invert line-clamp-5">
              {post.description}
            </div>
          </div>
          <div className="relative aspect-square w-full lg:w-96 lg:shrink-0">
            <a href={post.url}>
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
        </div>
      ))}
    </div>
  );
}
