import { client } from '@/sanity/lib/client';
import { MOVIE_POSTS_QUERY } from '@/sanity/lib/queries';
import Posts from '@/src/components/movies/movie-posts';
import { SanityDocument } from 'next-sanity';

export default async function Page() {
  const data = await client.fetch<SanityDocument[]>(
    MOVIE_POSTS_QUERY,
    {},
    {
      cache: 'force-cache',
      next: { tags: ['moviePost'] }
    }
  );
  return <Posts posts={data} />;
}
