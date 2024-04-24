// ./components/Posts.tsx

import { SanityDocument } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';
import { dataset, projectId } from '@/sanity/env';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';

const builder = imageUrlBuilder({ projectId, dataset });

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="container mx-auto flex flex-col gap-12 overflow-y-auto pb-12">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            href={`/movies/${post.slug.current}`}
            className="flex flex-col justify-between gap-12 md:flex-row"
          >
            {post.mainImage ? (
              <div className="relative flex aspect-[5/3] w-full max-w-screen-sm overflow-hidden p-0 md:w-1/2">
                <Image
                  className="m-0 rounded-lg object-cover p-0"
                  src={builder
                    .image(post.mainImage)
                    .width(500)
                    .height(300)
                    .quality(80)
                    .fit('crop')
                    .url()}
                  fill
                  alt={post.mainImage.alt || ''}
                />
              </div>
            ) : null}
            <div className="flex w-full flex-col justify-between gap-4 p-4 text-4xl font-[800] md:w-1/2">
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
