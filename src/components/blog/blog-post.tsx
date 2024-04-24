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
    <main className="container prose prose-lg prose-invert relative mx-auto flex flex-col gap-4">
      {mainImage ? (
        <div className="relative flex aspect-[5/3] w-full max-w-screen-md overflow-hidden p-0">
          <Image
            className="m-0 rounded-lg object-cover p-0"
            src={builder.image(mainImage).width(500).height(300).quality(80).fit('crop').url()}
            fill
            alt={mainImage.alt || ''}
          />
        </div>
      ) : null}
      {title ? <h1 className="m-0 pt-6 text-5xl font-[800]">{title}</h1> : null}
      <div>
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
