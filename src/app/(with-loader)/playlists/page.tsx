import Header from '@/src/components/layout/header';
import PageContainer from '@/src/components/layout/page-container';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'playlists',
  description: "Nicholas Cathcart's playlists."
};
export default function Page() {
  return (
    <PageContainer>
      <Header
        title="Playlists"
        description="Playlists from me. They lean heavy on the baroque or on the 70s funk side of things."
      />
      <div className="flex flex-col gap-8 py-8 md:py-16">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/0igWaAh3nxS3nXW1hLNHxW?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/0igWaAh3nxS3nXW1hLNHxW?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </PageContainer>
  );
}
