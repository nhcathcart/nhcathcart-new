import PageContainer from '@/src/components/layout/page-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'movies',
  description: "Nicholas Cathcart's movie blog."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <PageContainer>{children}</PageContainer>;
}
