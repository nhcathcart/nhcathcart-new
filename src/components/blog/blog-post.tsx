// ./components/Post.tsx

import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityDocument } from 'next-sanity';
import { dataset, projectId } from '@/sanity/env';
import CodeBlock from './code-block';

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body } = post;
  return (
    <main className="prose prose-lg prose-invert relative mx-auto flex w-full max-w-none flex-col gap-1">
      {mainImage ? (
        <div className="relative flex h-fit w-full flex-col items-end justify-center gap-4 overflow-hidden rounded p-0 md:h-[250px] md:flex-row md:items-center">
          <div className="relative aspect-square w-full md:max-w-[250px]">
            <Image
              className="m-0 rounded-lg object-cover p-0"
              src={builder.image(mainImage).width(500).height(500).quality(80).fit('crop').url()}
              fill
              alt={mainImage.alt || ''}
            />
          </div>
          <div className="flex min-h-full flex-col justify-end">
            {title ? <h1 className="mt-6 text-4xl font-[800] md:mt-0">{title}</h1> : null}
            <div className="relative m-0 flex h-16 flex-grow-0 items-center gap-x-4">
              <Image
                src={builder
                  .image(post.author.image)
                  .width(100)
                  .height(100)
                  .quality(100)
                  .fit('crop')
                  .url()}
                alt=""
                height={40}
                width={40}
                className="h-8 w-8 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6 ">
                <div className="flex flex-col font-semibold">
                  <div>{post.author.name}</div>
                  <time dateTime={post.publishedAt} className="text-xs font-thin text-text">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-3 md:mt-6">
        {body ? (
          <PortableText
            value={body}
            components={{
              types: {
                code: ({ value }) => {
                  return <CodeBlock code={value.code} language={value.language} />;
                }
              }
            }}
          />
        ) : null}
      </div>
    </main>
  );
}
