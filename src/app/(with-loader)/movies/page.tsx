import { client } from '@/sanity/lib/client';
import { MOVIE_POSTS_QUERY } from '@/sanity/lib/queries';
import Header from '@/src/components/layout/header';
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
  return (
    <>
      <Header title="Movies" description="Nicky C dishes out some takes." />
      <Posts posts={data} />
    </>
  );
}
