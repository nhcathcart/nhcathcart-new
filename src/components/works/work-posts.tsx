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
          className="relative flex flex-col gap-8 border-b border-text border-opacity-50 py-8 md:py-16 lg:flex-row lg:justify-between"
        >
          <div className="flex group relative min-h-full max-w-xl flex-grow flex-col">
            <div>
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-text">
                <a href={post.url}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <div className="prose prose-invert mt-5 line-clamp-5 text-md leading-6 text-text">
                {post.description}
              </div>
            </div>
          </div>
          <div className="relative aspect-square w-full lg:w-80 lg:shrink-0">
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
