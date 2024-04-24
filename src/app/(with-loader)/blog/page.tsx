import { client } from '@/sanity/lib/client';
import { BLOG_POSTS_QUERY } from '@/sanity/lib/queries';
import Posts from '@/src/components/blog/blog-posts';
import Header from '@/src/components/layout/header';
import { SanityDocument } from 'next-sanity';

export default async function Page() {
  const data = await client.fetch<SanityDocument[]>(
    BLOG_POSTS_QUERY,
    {},
    {
      cache: 'force-cache',
      next: { tags: ['blogPost'] }
    }
  );
  return (
    <>
      <Header
        title="Technical Blog"
        description="Musings on tech that is new to me, fun, or interesting in some way."
      />
      <Posts posts={data} />
    </>
  );
}
