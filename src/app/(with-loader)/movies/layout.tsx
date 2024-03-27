import PageContainer from "@/src/components/layout/page-container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
        {children}
    </PageContainer>
  );
}