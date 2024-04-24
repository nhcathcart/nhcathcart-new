import { client } from '@/sanity/lib/client';
import { WORK_POSTS_QUERY } from '@/sanity/lib/queries';

import Header from '@/src/components/layout/header';
import PageContainer from '@/src/components/layout/page-container';
import WorkPosts from '@/src/components/works/work-posts';
import { SanityDocument } from 'next-sanity';

export default async function WorksPage() {
  const data = await client.fetch<SanityDocument[]>(
    WORK_POSTS_QUERY,
    {},
    {
      cache: 'force-cache',
      next: { tags: ['workPost'] }
    }
  );
  console.log(data);
  return (
    <PageContainer>
      <Header title="Works" description="A smattering of recent work from me." />
      <WorkPosts posts={data} />
    </PageContainer>
  );
}
