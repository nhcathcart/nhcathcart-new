// ./components/Post.tsx

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { dataset, projectId } from "@/sanity/env";
import CodeBlock from "./code-block";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body } = post;
  console.log("body: ", body);
  return (
    <main className="relative container flex flex-col prose prose-invert prose-lg gap-4 mx-auto">
      {mainImage ? (
        <div className="flex relative w-full max-w-screen-md aspect-[5/3] overflow-hidden p-0">
          <Image
            className="rounded-lg object-cover m-0 p-0"
            src={builder
              .image(mainImage)
              .width(500)
              .height(300)
              .quality(80)
              .fit("crop")
              .url()}
            fill
            alt={mainImage.alt || ""}
          />
        </div>
      ) : null}
      {title ? <h1 className="text-5xl font-[800] m-0 pt-6">{title}</h1> : null}
      <div>
        {body ? (
          <PortableText
            value={body}
            components={{
              types: {
                code: ({ value }) => {
                  return (
                    <CodeBlock code={value.code} language={value.language} />
                  );
                },
              },
            }}
          />
        ) : null}
      </div>
    </main>
  );
}
